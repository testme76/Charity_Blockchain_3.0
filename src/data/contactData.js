import image from "@/images/resources/contact-page-img-1.jpg";

export const contact = {
  tel: "",          // 清空电话号码或更新为新号码
  email: "",        // 清空邮箱或更新为新邮箱
  officeAddress: "", // 清空地址或更新为新地址
};

const contactData = {
  ...contact,
  image,           // 如果不需要图片也可以删除这行
  description: "", // 清空描述或更新为新描述
};

export default contactData; 