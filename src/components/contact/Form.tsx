"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Form = ({ post }: any) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setuserMessage] = useState("");

  async function clientAction(e: FormEvent) {
    e.preventDefault();
    const result = await post(userName, userEmail, userMessage);
    if (result === "success") {
      toast.success(
        "We have received your message. One of our team member will contact you ASAP.",
        { duration: 6000 }
      );
      setUserName("");
      setUserEmail("");
      setuserMessage("");
    } else if (result === "error") {
      toast.error("An error occured while sending email. Please try again");
    }
  }
  return (
    <form className="form" onSubmit={clientAction}>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder="Full Name"
          name="Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="name" className="form__label">
          Full Name
        </label>
      </div>

      <div className="form__group">
        <input
          type="email"
          className="form__input"
          id="email"
          placeholder="Email address"
          required
          name="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="email" className="form__label">
          Email address
        </label>
      </div>

      <div className="form__group">
        <textarea
          // type="text"
          className="form__input"
          id="message"
          rows={4}
          placeholder="Write your message"
          required
          name="Message"
          value={userMessage}
          onChange={(e) => setuserMessage(e.target.value)}
        />
        <label htmlFor="message" className="form__label">
          Write your message
        </label>
      </div>

      <button className="btn btn--green u-margin-top-medium">Send Email</button>
    </form>
  );
};

export default Form;
