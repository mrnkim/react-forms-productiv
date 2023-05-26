import React from "react";
import "./Quote.css";

function Quote({ quote }) {
  return (
    <div className="Quote">
      {Object.keys(quote).length !== 0 && (
        <div>
          <b>"{quote.text}"</b>
        </div>
      )}
      <div>
        <small>{quote.author}</small>
      </div>
    </div>
  );
}

export default Quote;
