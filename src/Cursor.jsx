import React from "react";
import "./Cursor.css";
 

function Cursor() {
  return (
    <div className="why-section">
      <h1 className="why-title">
        Why Punjab Insurance
        <span className="underline"></span>
      </h1>

      <div className="card-container">
        <div className="card">
          <div className="icon">
            
          </div>
          <h3>Specialized guidance</h3>
          <p>
            RDSP rules can feel confusing, especially when English isn’t your
            first language. Our team combines financial expertise with a deep
            understanding of our community’s values and concerns.
          </p>
        </div>

        <div className="card">
          <div className="icon">
             
          </div>
          <h3>We understand your culture and concerns</h3>
          <p>
            We focus on RDSPs every day. Our advisors explain eligibility,
            grants, bonds, and withdrawals in clear, simple terms so your whole
            family understands.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            
          </div>
          <h3>No additional cost</h3>
          <p>
            We know how important family responsibility, respect for elders,
            and long-term planning are in our community. We take time to answer
            every question — in Punjabi, Hindi, Urdu, or English.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            
          </div>
          <h3>Clear guidance</h3>
          <p>
            RDSPs are available only to eligible Canadian residents. We clearly
            explain who qualifies, what documents are required, and when you
            can open an RDSP, so families don’t waste time or get incorrect
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cursor;