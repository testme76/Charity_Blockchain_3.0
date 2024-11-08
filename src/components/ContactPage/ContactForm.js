import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      
      // 添加表单字段
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // 添加文件
      files.forEach(file => {
        formDataToSend.append('files', file);
      });

      const response = await axios.post('http://localhost:3001/send-email', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response);
      alert('Message sent successfully!');
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
      setFiles([]);
      e.target.reset(); // 重置文件输入
      
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page__form">
      <form
        onSubmit={handleSubmit}
        className="contact-page__main-form contact-form-validated"
      >
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input 
                type="text" 
                placeholder="Your name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input 
                type="email" 
                placeholder="Email address" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </Col>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input 
                type="text" 
                placeholder="Phone Number" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input 
                type="text" 
                placeholder="Charity Name" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <textarea 
                name="message" 
                placeholder="Write description"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </Col>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input 
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleFileChange}
                className="form-control"
              />
              {files.length > 0 && (
                <div className="mt-2">
                  <p>Selected files:</p>
                  <ul>
                    {files.map((file, index) => (
                      <li key={index}>
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Col>
          <Col xl={12}>
            <button 
              type="submit" 
              className="thm-btn contact-page__btn"
              disabled={isLoading}
            >
              {isLoading ? (
                'Sending...'
              ) : (
                <>
                  <i className="fas fa-arrow-circle-right"></i>Send a Message
                </>
              )}
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ContactForm;