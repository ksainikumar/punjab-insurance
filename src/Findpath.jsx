import React from "react";
import "./Findpath.css";

import img1 from ".assets/image copy 4.png";      // replace with your image
import img2 from ".assets/image copy 3.png";   // replace with your image
import img3 from "./assets/image copy 2.png";     // replace with your imag
function Findpath() {
  return (
    <section className="findpath-section">

      <h2 className="findpath-title">
        Find your path to financial freedom
      </h2>
      <div className="findpath-underline"></div>

      <div className="findpath-cards">

        {/* Card 1 */}
        <div className="findpath-card">
          <h3>Not sure about DTC?</h3>
          <img src={img1} alt="DTC Help" />
          <p>
            If you’re unsure about qualifying for the Disability Tax Credit
            (DTC), you can quickly check your eligibility online and get
            guidance for completing Form T2201.
          </p>
          <button className="findpath-btn">DTC Questionnaire</button>
        </div>

        {/* Card 2 */}
        <div className="findpath-card">
          <h3>Have DTC?</h3>
          <img src={img2} alt="Grants and Bonds" />
          <p>
            If you already have the Disability Tax Credit (DTC), you can easily
            open your RDSP and maximize government grants and bonds in just a
            few steps.
          </p>
          <button className="findpath-btn">Grants & Bonds</button>
        </div>

        {/* Card 3 */}
        <div className="findpath-card">
          <h3>See your numbers</h3>
          <img src={img3} alt="Calculator" />
          <p>
            Quickly estimate your potential RDSP grants, bonds, and long-term
            growth — get an instant view of how your savings can build over time.
          </p>
          <button className="findpath-btn">RDSP Calculator</button>
        </div>

      </div>

    </section>
  );
}

export default Findpath;