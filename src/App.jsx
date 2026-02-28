 import React from "react";
import "./App.css";
import heroImg from "/Users/yogeshsaini/Punjab-insurance/src/image.png"; // place image in src folder

export default function App() {
return (
<div className="app">
{/* Top Bar */}
<div className="topbar">
<span>24X7 TOLLFREE</span>
<span className="phone">📞 1-888-978-6522</span>
</div>

{/* Navbar */}
<header className="navbar">
<div className="logo">
<span className="logo-icon">pii</span>
<span className="logo-text">
Punjab Insurance<br />
Agency inc.
</span>
</div>

<nav>
<a href="#">Home</a>
<a href="#">About</a>

{/* RDSP Dropdown */}
<div className="dropdown">
<a href="#" className="dropbtn">RDSP ▾</a>
<div className="dropdown-content">
<a href="#">What is RDSP?</a>
<a href="#">Eligibility</a>
<a href="#">Benefits</a>
<a href="#">Calculator</a>
</div>
</div>

{/* DTC Dropdown */}
<div className="dropdown">
<a href="#" className="dropbtn">DTC ▾</a>
<div className="dropdown-content">
<a href="#">What is DTC?</a>
<a href="#">Eligibility</a>
<a href="#">Benefits</a>
<a href="#">Apply Now</a>
</div>
</div>

<a href="#">FAQs</a>
<a href="#">Contact Us</a>
</nav>
</header>

{/* Hero Section */}
<section className="hero">
<div className="hero-left">
<h1>
Unlock Up to $90,000 in Government Grants & Bonds with an RDSP –
Through Punjab Insurance
</h1>

<p>
Punjab Insurance helps families like yours understand and open
Registered Disability Savings Plans (RDSPs) for loved ones with
disabilities — at no additional cost to you.
</p>

<div className="buttons">
<button className="btn primary">Get a Free RDSP Review</button>
<button className="btn secondary">RDSP Calculator</button>
</div>
</div>

<div className="hero-right">
<div className="hexagon">
<img src={heroImg} alt="Family" />
</div>
</div>
</section>
</div>
);
}