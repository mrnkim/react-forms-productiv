import React, { useState } from "react";
import Quote from "./Quote";
import axios from "axios";
import "./QuoteHandler.css";
const QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes";

function QuoteHandler() {
  const [quote, setQuote] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  async function getQuote() {
    const randomQuote = await axios.get(QUOTE_URL + "/random");
    setQuote(randomQuote.data.quote);
  }

  function showQuote() {
    setIsButtonClicked(true);
    setQuote(getQuote);
  }

  return (
    <div>
      <Quote quote={quote} />
      {!isButtonClicked && (
        <button className="quoteButton" onClick={showQuote}>
          Click here for an inspirational quøte!
        </button>
      )}
      {isButtonClicked && (
        <button className="quoteButton" onClick={showQuote}>
          Nü Quøte
        </button>
      )}
    </div>
  );
}

export default QuoteHandler;
