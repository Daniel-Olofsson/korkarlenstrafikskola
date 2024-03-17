import React from "react";

/**
 *@param offerTitle
 *@param offerContent
 *
 *
 */
const offers = ({ offerTitle, offerContent }) => {
  return (
    <div className="offers__container">
      <h1 className="offer__title">{offerTitle.toUpperCase()}</h1>
      <p className="offer__content">{offerContent}</p>
    </div>
  );
};

export default offers;
