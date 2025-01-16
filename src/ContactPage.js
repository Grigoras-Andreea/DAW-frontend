import React from "react";
import Navbar from "./Navbar";
import "./ContactPage.css"; 

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-info">
          <div className="contact-item">
            <h2>Name</h2>
            <p>Grigoras Simona Andreea</p>
          </div>
          <div className="contact-item">
            <h2>Email</h2>
            <p>
              <a href="mailto:support@example.com">simona.grigoras@student.unitbv.ro</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
