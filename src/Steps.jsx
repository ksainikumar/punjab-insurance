import React from "react";
import "./Steps.css";
import stepImg from "/Users/yogeshsaini/Punjab-insurance/src/image copy 6.png"; // replace with your image

function Steps() {
  return (
    <section className="steps-wrapper">

      <div className="steps-container">

        {/* Left Content */}
        <div className="steps-left">
          <h2>Take the first step today</h2>

          <p>
            Take control of tomorrow — open an RDSP today or talk to an
            advisor for guidance.
          </p>

          <p>
            You don’t need to figure out RDSPs alone. A short conversation
            with our team can help you understand your options and start
            building long-term security for your loved one.
          </p>

          <button className="steps-btn">
            Talk to Us About RDSP
          </button>

          <div className="steps-note">
            Want official details? We’ll guide you — and you can always verify at Canada.ca.
          </div>
        </div>

        {/* Right Image */}
        <div className="steps-right">
          <img src={stepImg} alt="Family planning" />
        </div>

      </div>

    </section>
  );
}

export default Steps;