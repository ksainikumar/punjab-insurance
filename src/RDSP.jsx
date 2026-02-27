import React from "react";
import "./RDSP.css";

function RDSP() {
  return (
    <section className="rdsp-wrapper">

      {/* Cards */}
      <div className="rdsp-grid">

        <div className="rdsp-card">
          <div className="card-header">
            <span className="card-number">01</span>
            <h3>DTC-approved or applying families</h3>
          </div>
          <p>
            Families with a loved one approved or applying for the Disability Tax Credit (DTC).
          </p>
        </div>

        <div className="rdsp-card">
          <div className="card-header">
            <span className="card-number">02</span>
            <h3>Parents planning long-term security</h3>
          </div>
          <p>
            Parents planning long-term financial security for their children.
          </p>
        </div>

        <div className="rdsp-card">
          <div className="card-header">
            <span className="card-number">03</span>
            <h3>Adults seeking independence</h3>
          </div>
          <p>
            Adults with disabilities who want more independence and stability.
          </p>
        </div>

        <div className="rdsp-card">
          <div className="card-header">
            <span className="card-number">04</span>
            <h3>Newcomers & first-generation families</h3>
          </div>
          <p>
            Families who prefer guidance in Punjabi, Hindi, Urdu, and English.
          </p>
        </div>

      </div>

    </section>
  );
}

export default RDSP;