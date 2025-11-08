import "./Footer.css";
import React from "react";
import logo from "../../assets/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const mailto = `mailto:support@campusevents.edu?subject=${encodeURIComponent(
    "Campus Events — Support"
  )}`;

  const mapsUrl =
    "https://maps.google.com/?q=1455%20De%20Maisonneuve%20Blvd%20W%2C%20Montreal%20QC%20H3G%201M8";

  return (
    <footer className="footer">
      
      <img src={logo}/>
      <section className="contact_info" aria-labelledby="contact-heading">
      <h4 id="contact-heading">Contact Us</h4>
      <p>Have a question about events or tickets? Reach out.</p>

      <address>
        <p>
          <strong>Email:</strong>{" "}
          <a href={mailto}>support@campusevents.edu</a>
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+15148482424">514-848-2424</a>
        </p>

        <p>
          <strong>Hours:</strong>{" "}
          <time dateTime="Mo-Fr 09:00-17:00">Mon–Fri, 9–5</time>
        </p>

        <p>
          <strong>Address:</strong><br />
          1455 De Maisonneuve Blvd. W.<br />
          Montreal, QC&nbsp;H3G&nbsp;1M8<br />
          Canada<br />
          
          <a className="btn-link" href={mapsUrl} target="_blank" rel="noreferrer">
            View on Map
          </a>
        </p>
      </address>

      
      <p className="small">Service available in English and French.</p>

      {/* Social links  */}
      <nav aria-label="Social links" className="small">
        <a href="https://www.instagram.com/concordiauniversity/" target="_blank" rel="noreferrer"><FaInstagram classname ="icon"/></a>
        {" · "}
        <a href="https://x.com/concordia" target="_blank" rel="noreferrer">X</a>
        {" · "}
        <a href="https://www.linkedin.com/school/concordia-university/posts/?feedView=all" target="_blank" rel="noreferrer"><FaLinkedin classname = "icon" /></a>
      </nav>

      
      <p className="small">
        We respect your privacy and only use your info to help with your request.{" "}
       
       
      </p>
    </section>
      
    </footer>
  );
}
