import React from "react";
import "./offers.css";
/**
 *@param offerTitle
 *@param offerContent
 *
 *
 */
function offers({ offerTitle, offerContent }) {
  return (
    <div className="offers__container">
      <h1 className="offer__title">{offerTitle}</h1>
      <p className="offer__content">{offerContent}</p>
    </div>
  );
}

export default offers;
