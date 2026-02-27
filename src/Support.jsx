import React from "react";
import "./Support.css";

import supportImg from "/Users/yogeshsaini/Punjab-insurance/src/image copy 5.png"; // replace with your image

function Support() {
  return (
    <section className="support-section">

      {/* Title */}
      <h2 className="support-title">
        Support that understands your family
      </h2>
      <div className="support-underline"></div>

      <p className="support-subtext">
        Many parents in our community worry about who will look after their
        child with a disability when they are no longer here. An RDSP is one
        way to create financial stability for the future. At Punjab Insurance,
        we speak your language, understand your worries, and guide you with
        patience and respect.
      </p>

      {/* Main Content */}
      <div className="support-main">

        {/* Left Card */}
        <div className="support-left">
          <h3>A calm, clear path forward</h3>
          <p>
            We help you understand the RDSP in a way that feels simple and
            reassuring—so you can make decisions with confidence, not stress.
          </p>

          <ul className="support-list">
            <li>Clear explanations of what the RDSP can do for your family</li>
            <li>Support that respects your time, culture, and priorities</li>
            <li>Guidance that stays helpful as your life changes</li>
          </ul>

          <div className="support-highlight">
            Patient guidance. Clear steps. Long-term peace of mind.
          </div>
        </div>

        {/* Right Image */}
        <div className="support-image">
          <img src={supportImg} alt="Family support" />
        </div>

      </div>

      {/* Bottom Features */}
      <div className="support-features">

        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <div>
            <h4>We speak your language</h4>
            <p>Punjabi, Hindi, Urdu, and English—so you feel understood at every step.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <div>
            <h4>Respect-first guidance</h4>
            <p>We listen with patience and explain options without pressure or jargon.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <div>
            <h4>Future-focused planning</h4>
            <p>Clear next steps that support long-term stability for your family.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Support;