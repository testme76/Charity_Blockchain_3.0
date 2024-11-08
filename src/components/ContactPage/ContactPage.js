import contactData from "@/data/contactData";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

const { image, tel, email, officeAddress, description } = contactData;

const ContactPage = () => {
  return (
    <section className="contact-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Contact With Us</span>
          <h2 className="section-title__title">
            We love to hear from our <br /> happy customers
          </h2>
        </div>
        <Row className="justify-content-center">
          <Col xl={6} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
