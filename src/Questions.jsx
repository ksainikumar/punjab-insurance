import React, { useState } from "react";
import "./Questions.css";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is an RDSP and how does it work?",
      answer:
        "A Registered Disability Savings Plan (RDSP) is a long-term savings plan designed to help Canadians with disabilities build financial security. Contributions can grow tax-free, and the government may add grants and bonds."
    },
    {
      question: "Who is eligible for an RDSP in Canada?",
      answer:
        "To open an RDSP, the beneficiary must be eligible for the Disability Tax Credit (DTC), have a valid SIN, and be a Canadian resident."
    },
    {
      question:
        "What is the Disability Tax Credit (DTC) and how does it affect RDSP eligibility?",
      answer:
        "The DTC is a non-refundable tax credit that helps reduce income tax for individuals with disabilities. Being approved for the DTC is required to open an RDSP."
    },
    {
      question: "How do I open an RDSP account?",
      answer:
        "You can open an RDSP through participating financial institutions once DTC eligibility is confirmed. A representative can guide you through the paperwork and contribution setup."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-underline"></div>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      <button className="faq-button">Show More</button>

    </section>
  );
}

export default Questions;