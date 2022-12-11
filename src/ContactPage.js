import React, { useState } from "react";
import { Form } from "react-bootstrap";
import useFormGroup from "./hocs/UseFormGroup";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const formGroup = useFormGroup(null);

  return (
    <div title="Contact Page">
      <h2 className="text-center p-4">Contact Us</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {formGroup(
          name,
          setName,
          "Your Name",
          "Please Enter your name",
          "text",
          ""
        )}
        {formGroup(
          phone,
          setPhone,
          "Your Phone",
          "Please Enter your phone no",
          "text",
          ""
        )}

        {formGroup(
          message,
          setMessage,
          "Your Message",
          "Please Enter your message",
          "text",
          ""
        )}
      </Form>
    </div>
  );
};

export default ContactPage;
