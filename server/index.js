const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();

// 扩展 CORS 配置
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'multipart/form-data']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 确保上传目录存在
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// 配置文件存储
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // 保留原始文件名并添加时间戳
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// 文件过滤器
const fileFilter = (req, file, cb) => {
    // 扩展允许的文件类型
    const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only images (JPG, PNG, GIF, WEBP), PDF, DOC, DOCX, and TXT files are allowed.'), false);
    }
};

// Multer 配置
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
        files: 10
    }
}).array('files', 10);

// 邮件发送路由
app.post('/send-email', async (req, res) => {
    console.log('Received request'); // 调试日志

    upload(req, res, async function(err) {
        console.log('Processing upload'); // 调试日志

        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err); // 调试日志
            return res.status(400).send(`Upload error: ${err.message}`);
        } else if (err) {
            console.error('Unknown error:', err); // 调试日志
            return res.status(500).send(`Unknown error: ${err.message}`);
        }

        console.log('Files:', req.files); // 调试日志
        console.log('Body:', req.body); // 调试日志

        const { name, email, subject, phone, message } = req.body;
        const files = req.files;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shhaogao@gmail.com',
                pass: 'rudtxfoxquweiomk'
            }
        });

        // 构建 HTML 邮件内容
        const htmlContent = `
            <h2>New Charity Project Submission</h2>
            <p><strong>Full Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${message || 'No message provided'}</p>
            ${files && files.length > 0 ? '<p><strong>Attachments:</strong> ' + files.length + ' file(s)</p>' : ''}
        `;

        const mailOptions = {
            from: 'shhaogao@gmail.com',
            to: 'shhaogao@gmail.com',
            subject: `Charity Project: ${subject || 'New Contact'}`,
            html: htmlContent,
            text: htmlContent.replace(/<[^>]*>/g, ''), // 纯文本版本
            attachments: files ? files.map(file => ({
                filename: file.originalname,
                path: file.path,
                contentType: file.mimetype
            })) : []
        };

        try {
            console.log('Sending email...'); // 调试日志
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully'); // 调试日志

            // 清理上传的文件
            if (files && files.length > 0) {
                files.forEach(file => {
                    if (fs.existsSync(file.path)) {
                        fs.unlinkSync(file.path);
                    }
                });
            }

            res.status(200).send('Email sent successfully!');
        } catch (error) {
            console.error('Email sending error:', error); // 调试日志
            
            // 清理文件
            if (files && files.length > 0) {
                files.forEach(file => {
                    if (fs.existsSync(file.path)) {
                        fs.unlinkSync(file.path);
                    }
                });
            }
            
            res.status(500).send(`Failed to send email: ${error.message}`);
        }
    });
});

// 健康检查路由
app.get('/health', (req, res) => {
    res.status(200).send('Server is running');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Upload directory: ${path.resolve(uploadDir)}`); // 显示上传目录的完整路径
});