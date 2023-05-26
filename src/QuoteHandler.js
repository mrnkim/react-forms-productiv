import React, { useState } from "react";
import Quote from "./Quote";
import axios from "axios";
const QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes";

function QuoteHandler() {
  const [quote, setQuote] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  async function getQuote() {
    const randomQuote = await axios.get(QUOTE_URL + "/random");
    setQuote(randomQuote.data.quote);
  }

  function handleClick() {
    setIsButtonClicked(true);
    setQuote(getQuote);
  }

  return (
    <div>
      <Quote quote={quote} />
      {!isButtonClicked && (
        <button onClick={handleClick}>
          Click here for an inspirational quote!
        </button>
      )}
      {isButtonClicked && <button onClick={handleClick}>Nu Quote</button>}
    </div>
  );
}

export default QuoteHandler;
