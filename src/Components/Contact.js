import React, { useState } from "react";
import { Nav } from "./Nav";
import axios from "axios";
import { Loading } from "./Loading";

export const Contact = () => {
  const [message, setMessage] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });
  const [loading, setLoading] = useState(false);

  const submitMessage = () => {
    console.log("posting", message);
    setLoading(true);
    axios
      .post("https://wip-api.herokuapp.com//api/contact/", message)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChanges = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg">
      <Nav />
      <main>
        <h1 id="contact-title">Get in touch with us!</h1>
        <h3 id="contact-subtitle">Send us your ideas and suggestions</h3>

        {loading ? <Loading /> : null}

        <div id="contact-form">
          <form onSubmit={submitMessage}>
            <div id="contact-info">
              <input
                name="name"
                value={message.name}
                placeholder="Your name"
                onChange={handleChanges}
                type="text"
                className="input"
              />
              <input
                name="email"
                value={message.email}
                placeholder="Your email"
                onChange={handleChanges}
                type="text"
                className="input"
              />
            </div>
            <input
              name="subject"
              value={message.subject}
              placeholder="Subject"
              onChange={handleChanges}
              type="text"
              className="input subject"
            />
            <textarea
              name="message"
              value={message.message}
              placeholder="Message"
              onChange={handleChanges}
              type="text"
              className="input message"
            ></textarea>
            <button type="submit" className="submit">
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
