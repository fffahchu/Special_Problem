import React from "react";

const MoveToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <div className="fixed bottom-10 right-5" onClick={scrollToTop}>
      <img src="/assets/icons/arrow-up-circle.svg" alt="arrow-up-circle" />
    </div>
  );
};

export default MoveToTop;
