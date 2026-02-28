import React from "react";
import "./Bg.css";
import heroImage from ".assets/image copy.png"; // <-- replace with your image filename

function Bg() {
  return (
    <section className="rdsp-section">
      
      {/* Top Content */}
      <div className="rdsp-content">
        <h1 className="rdsp-title">
          RDSP support for families like yours
        </h1>
        <div className="rdsp-line"></div>

        <p className="rdsp-description">
          If you have a child, spouse, parent, or family member with a disability,
          an RDSP can be one of the most powerful tools to secure their future.
          Many families in our community don’t realize that the Government of
          Canada may contribute tens of thousands of dollars through grants and
          bonds. Punjab Insurance is here to explain everything in simple language
          and help you take action.
        </p>
      </div>

      {/* Image Card */}
      <div className="rdsp-image-wrapper">
        <img src={heroImage} alt="Family Planning" />
      </div>

      {/* Bottom Text */}
      <p className="rdsp-footer-text">
        We help you understand eligibility, the DTC connection, and how an RDSP
        can fit into your family’s long-term planning — without confusing jargon
        or pressure.
      </p>

      {/* Support Badge */}
      <div className="rdsp-support">
        <span className="support-dot"></span>
        Support is tailored to your situation — step-by-step, at your pace.
      </div>

    </section>
  );
}

export default Bg;