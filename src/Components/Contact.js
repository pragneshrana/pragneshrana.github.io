import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";
import AiNews from "./AInews";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  if (!data) return null;

  const { name, address, phone, contactmessage } = data;
  const { street, city, state, zip } = address;

  // Update form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit - open Outlook with draft email
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Create the mailto link
    const mailtoLink = `mailto:pragneshrana244@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the default email client (Outlook or others)
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{contactmessage}</p>
          </div>
        </div>
      </Fade>

      <div className="row" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Slide center duration={1000}>
          <div className="eight columns">
            <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    id="contactSubject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning">Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        {/* <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest AI News</h4>
              <ul id="twitter">
                <li>
                  <span>
                    <AiNews />
                  </span>
                  <b>
                    <a href="./">2 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </Slide> */}
      </div>
    </section>
  );
};

export default Contact;
