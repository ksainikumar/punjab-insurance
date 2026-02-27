 import React from "react";
import "./Links.css";
import logo from "/Users/yogeshsaini/Punjab-insurance/src/image copy 7.png"; // replace with your logo

function Links() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col footer-about">
          <img src={logo} alt="Punjab Insurance" className="footer-logo" />

          <p>
            Punjab Insurance Inc. was established in late 2006, as a company
            that provides protection to all Canadians.
          </p>

          <div className="footer-info">
            <h4>ADDRESS</h4>
            <p>7003 Steeles Ave. W Unit 10, Etobicoke, Ontario M9W 0A2</p>

            <h4>24X7 TOLLFREE</h4>
            <p>1-888-978-6522</p>

            <h4>EMAIL</h4>
            <p>admin@punjabinsurance.ca</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>About Us</li>
            <li>How RDSP Works</li>
            <li>RDSP Eligibility</li>
            <li>RDSP Calculator</li>
            <li>Grants & Bonds</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe to the free newsletter and stay up to date.</p>

          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Send</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2026 Punjab Insurance. All Rights Reserved.
        </p>
        <p>Privacy Policy | Terms of Use</p>
        <p className="disclaimer">
          This website provides general information only and is not intended
          as financial or legal advice. For official details, visit Canada.ca.
        </p>
      </div>
    </footer>
  );
}

export default Links;