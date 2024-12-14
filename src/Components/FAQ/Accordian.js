import React, { useState } from "react";
import { FaqData } from "../../Data/FaqData";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion m-5" id="accordionExample">
      {FaqData.map((item, index) => (
        <div className="accordion-item" key={index} style={{backgroundColor:" #80e142"}}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${
                activeIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`collapse${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              activeIndex === index ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;

