import React from "react";
import Fade from "react-reveal";

const About = ({ data }) => {
  if (!data) return null;

  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resumedownload,
  } = data;

  const profilepic = "images/" + image;

  const networks = data.social.map((network) => (
    <span key={network.name} style={
      {
        marginRight: '20px',
        fontSize: '20px',
        display: 'inline-flex',
        alignItems: 'start'
      }
    }>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </span>
  ));

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="four columns" style={
            {
              marginTop: '42px'
            }
          }>
            <img
              className="profile-pic"
              src={profilepic}
              alt="Profile"
            />
          </div>
          <div className="eight columns main-col">
            <h2>About Me</h2>
            <p style={{textAlign:'justify'}}>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                  <br />
                  <div className="social-links" style={{
                    marginTop: '10px'
                  }}>{networks}</div>
                </p>
              </div>
              
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
