import React from "react";
import "./Processwork.css";

function Processwork() {
  return (
    <section className="process-section">

      <h2 className="process-title">
        How the RDSP process works with Punjab Insurance
      </h2>
      <div className="process-underline"></div>

      <p className="process-subtext">
        As life changes, we’re here to review your RDSP, adjust contributions,
        and answer questions about withdrawals, timelines, and how the plan fits
        into your overall finances.
      </p>

      <div className="process-grid">

        {/* Step 1 */}
        <div className="process-card">
          <div className="process-number">01</div>
          <div>
            <h3>Free conversation</h3>
            <p>
              We break the RDSP journey into four simple steps so you always
              know what comes next.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="process-card">
          <div className="process-number">02</div>
          <div>
            <h3>Eligibility & planning</h3>
            <p>
              We start with a friendly call to understand your family, your
              loved one’s situation, and your goals for the future.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="process-card">
          <div className="process-number">03</div>
          <div>
            <h3>Open and fund your RDSP</h3>
            <p>
              We confirm RDSP and DTC eligibility, explain how government
              grants and bonds work, and build a contribution plan that fits
              your budget — even if you can only start small.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="process-card">
          <div className="process-number">04</div>
          <div>
            <h3>Ongoing support</h3>
            <p>
              We complete the paperwork together, open the RDSP, and help you
              set up contributions so you can begin receiving government
              support as soon as possible.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="process-cta">
        <p>Ready to see how much support your family could receive?</p>
        <button className="process-btn">
          Book a Free RDSP Consultation
        </button>
      </div>

    </section>
  );
}

export default Processwork;