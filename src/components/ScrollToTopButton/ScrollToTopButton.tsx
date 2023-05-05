import React, { useState } from "react";
import "./ScrollToTopButton.css";
import { SlArrowUp } from "react-icons/sl";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-topButton">
          <SlArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
