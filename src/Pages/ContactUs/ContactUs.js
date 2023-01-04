import React from "react";
import Form from "react-bootstrap/Form";
import loginBanner from "../../images/login-banner.png";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-4 text-center">
          {" "}
          <h3 className="my-5">We'd Love to Hear From You :-</h3>{" "}
          <img className="w-75 mb-5" src={loginBanner} alt="" />
        </div>
        <div className="col-6 my-5 p-4 login-Form">
          <h3 className="">Contact us</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Form.Group className="text-center">
              <input
                className="signIn-btn login-btn text-center"
                value="Send Message"
                type="submit"
              />
            </Form.Group>
          </Form>
          <div className="text-center">
            <h3>Or</h3>
            <a
              className="text-decoration-none  login-btn px-5 py-2"
              href="mailto:robiul15-2516@diu.edu.bd"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
