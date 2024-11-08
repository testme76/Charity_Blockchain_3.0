import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpwzdbyk");

  if (state.succeeded) {
    return (
      <div className="contact-page__form">
        <div className="alert alert-success">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page__form">
      <form
        onSubmit={handleSubmit}
        className="contact-page__main-form contact-form-validated"
      >
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input type="text" placeholder="Your name" name="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
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
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </Col>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input type="text" placeholder="Phone Number" name="phone" />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input type="text" placeholder="Charity Name" name="subject" />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
          </Col>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <textarea
                name="message"
                placeholder="Write description"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </Col>
        </Row>
        <button
          type="submit"
          className="thm-btn contact-page__btn"
          disabled={state.submitting}
        >
          <i className="fas fa-arrow-circle-right"></i>
          {state.submitting ? "Sending..." : "Send a Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
