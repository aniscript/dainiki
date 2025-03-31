import { useEffect, useState } from "react";
import { getQuotes } from "../api";

const Quotes = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await getQuotes();
        const quote = response.quote;

        if (quote) {
          setQuote(quote);
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  return <p className="text-indigo-600 italic">"{quote}"</p>;
};

export default Quotes;
