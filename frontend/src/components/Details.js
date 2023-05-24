import React from "react";

const Details = ({ onShow, buttonText, buttonClassName }) => {
  return (
    <div>
      <button className={buttonClassName} onClick={onShow}>{buttonText}</button>
    </div>
  );
};

export default Details;