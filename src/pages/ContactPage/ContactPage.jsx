import React from "react";
import "../../App.css";  


 function Contact_Page() {
  return (
    <section className="contact_info">
      <h2>Contact Us</h2>
      <p>Have a question about events or tickets? Reach out.</p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:support@campusevents.edu">support@campusevents.edu</a>
      </p>
      <p><strong>Hours:</strong> Mon–Fri, 9–5</p>

      <p className="small">
        We respect your privacy and only use your info to help with your request.
      </p>
    </section>
  );
}

export default Contact_Page;