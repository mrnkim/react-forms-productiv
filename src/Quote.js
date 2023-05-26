import React from "react";

function Quote({ quote }) {
  return (
    <div className="Quote">
      <div>
        <b>{quote.text}</b>
      </div>
      <div>
        <small>{quote.author}</small>
      </div>
    </div>
  );
}

export default Quote;
