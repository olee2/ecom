import React from "react";
import "./contact.scss";
import { useForm } from "react-hook-form";

interface IFormInput {
  fullName: string;
  subject: string;
  email: string;
  textField: string;
}

function Contact() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const fullName = register("fullName", { required: true, minLength: 3 });
  const subject = register("subject", { required: true, minLength: 3 });
  const email = register("email", { required: true });
  const textField = register("textField", { required: true, minLength: 3 });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <main>
      <div className="contact-banner">
        <div className="inner-container">
          {" "}
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="inner-container">
        {" "}
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="fullName">
            <span>Full Name:</span>
            <input
              type="text"
              id="fullName"
              onChange={fullName.onChange}
              onBlur={fullName.onBlur}
              ref={fullName.ref}
              name={fullName.name}
              required
              minLength={3}
            />
          </label>
          <label htmlFor="subject">
            <span>Subject:</span>
            <input
              type="text"
              id="subject"
              onChange={subject.onChange}
              onBlur={subject.onBlur}
              ref={subject.ref}
              name={subject.name}
              required
              minLength={3}
            />
          </label>
          <label htmlFor="email">
            <span>Email:</span>
            <input
              type="email"
              id="email"
              onChange={email.onChange}
              onBlur={email.onBlur}
              ref={email.ref}
              name={email.name}
              required
            />
          </label>
          <label className="textarea-label" htmlFor="message">
            <span>Message:</span>
            <textarea
              id="message"
              onChange={textField.onChange}
              onBlur={textField.onBlur}
              ref={textField.ref}
              name={textField.name}
              minLength={3}
              required
            />
          </label>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>{" "}
    </main>
  );
}

export default Contact;
