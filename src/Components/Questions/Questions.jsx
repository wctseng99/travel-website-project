import React, { useState } from "react";
import "./Questions.css";
import Accordion from "./Accordion";

const Questions = () => {
  const [active, setActive] = useState("");

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="FAQsection">
          <div className="accordion grid">
            <Accordion
              title="How do I choose the right travel destination for me?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales
          ac arcu ac tincidunt. Nulla faucibus purus vitae ipsum convallis, eu
          molestie velit ultricies. 
          Donec pretium in dolor nec venenatis.
          Suspendisse dolor mi, semper et tristique vitae, sagittis in diam. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos."
              active={active}
              setActive={setActive}
            />
          </div>

          <div className="accordion grid">
            <Accordion
              title="What are the best time to visit specific destinations?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales
          ac arcu ac tincidunt. Nulla faucibus purus vitae ipsum convallis, eu
          molestie velit ultricies. Donec pretium in dolor nec venenatis.
          Suspendisse dolor mi, semper et tristique vitae, sagittis in diam.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos."
              active={active}
              setActive={setActive}
            />
          </div>

          <div className="accordion grid">
            <Accordion
              title="How can I find the budget-friendly travel options?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam sodales ac arcu ac tincidunt. Nulla faucibus purus vitae ipsum convallis, eu
          molestie velit ultricies. Donec pretium in dolor nec venenatis.
          Suspendisse dolor mi, semper et tristique vitae, sagittis in diam. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos."
              active={active}
              setActive={setActive}
            />
          </div>

          <div className="accordion grid">
            <Accordion
              title="What essential items should I pack for my adventrue?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales
          ac arcu ac tincidunt.Nulla faucibus purus vitae ipsum convallis, eu
          molestie velit ultricies. Donec pretium in dolor nec venenatis.
          Suspendisse dolor mi, semper et tristique vitae, sagittis in diam. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos."
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        <div className="form">
          <div className="secHeading">
            <h3>Do you have any specific question?</h3>
            {/* <p>
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p> */}
          </div>

          <div className="formContent grid">
            <input type="email" placeholder="Enter email address" />
            <textarea placeholder="Enter your question here"></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Questions;
