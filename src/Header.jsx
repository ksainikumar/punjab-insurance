 import React, { useState } from "react";
import "./Header.css";

export default function App() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="container">
      <h1 className="title">
        What is Registered Disability Savings Plan (RDSP)?
      </h1>

      <div className="grid">
        {/* LEFT INFO SECTION */}
        <div className="card info">
          <p className="subtitle">
            A government savings plan for Disabled Canadians (DTC-approved) to
            build long-term security.
          </p>

          <div className="timeline">
            {[
              "Open ages 0–59; grants & bonds pay until you turn 49.",
              "Government grants (CDSG): up to $3,500/year — $70,000 .",
              "Government bond (CDSB): up to $1,000/year — $20,000 lifetime.",
              "Tax-deferred growth; anyone can contribute.",
            ].map((text, i) => (
              <div key={i} className="timeline-item">
                <div className="circle">{`0${i + 1}`}</div>
                <div>{text}</div>
              </div>
            ))}
          </div>

          <div className="help-box">
            <h3>Free help to check RDSP eligibility:</h3>
            <div className="contact">
              <span className="phone">1-888-978-6522</span>
              <button className="chat-btn">Chat</button>
            </div>
          </div>

          <div className="cta">
            <p>Do you have DTC approval?</p>
            <div className="buttons">
              <button>Yes</button>
              <button>No</button>
              <button className="primary">Calculate My RDSP</button>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="card form">
          <h3>Please fill out the form below</h3>

          <div className="row">
            <input placeholder="First Name *" />
            <input placeholder="Last Name *" />
          </div>

          <div className="row">
            <input placeholder="Email Address *" />
            <input placeholder="Mobile Number *" />
          </div>

          <div className="row">
            <select>
              <option>Select Province/Territory</option>
            </select>
            <select>
              <option>What do you need help with?</option>
            </select>
          </div>

          <textarea placeholder="Details you'd like to discuss"></textarea>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            I agree to the Terms & Conditions
          </label>

          <button
            className={`submit ${agreed ? "active" : ""}`}
            disabled={!agreed}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}