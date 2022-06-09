import React from "react";
import "./styles.css";
import "boxicons";

export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((main) => setData(main.quotes));
  }, []);
  const [index, setIndex] = React.useState(0);
  const background = [
    "'https://github.com/divu050704/assets-holder/blob/main/Random-quote-Images/1.jpg?raw=true'",
    "'https://github.com/divu050704/assets-holder/blob/main/Random-quote-Images/2.jpg?raw=true'",
    "'https://github.com/divu050704/assets-holder/blob/main/Random-quote-Images/3.jpg?raw=true'",
    "'https://github.com/divu050704/assets-holder/blob/main/Random-quote-Images/4.jpg?raw=true'",
    "'https://github.com/divu050704/assets-holder/blob/main/Random-quote-Images/5.jpg?raw=true'"
  ];
  const [image, setImage] = React.useState(0);
  function New() {
    setIndex(Math.floor(Math.random() * 100));
    setImage((prev) => (prev === 4 ? 0 : prev + 1));
  }
  function getQuote() {
    if (data[index] !== undefined) {
      return data[index].quote;
    } else {
      return "";
    }
  }
  function getAuthor() {
    if (data[index] !== undefined) {
      return data[index].author;
    } else {
      return "";
    }
  }
  return (
    <div
      className="main"
      style={{
        backgroundImage: "url(" + background[image] + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }}
    >
      <div id="quote-box" className="card">
        <div id="text" className="quote">
          <h2>{getQuote()}</h2>
        </div>
        <div id="author">
          <h3>- {getAuthor()}</h3>
        </div>
        <button id="new-quote" onClick={New}>
          New Quote
        </button>
        <a
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
            encodeURIComponent(getQuote() + " -" + getAuthor())
          }
          className="anchor"
        >
          <box-icon name="twitter" type="logo" animation="tada"></box-icon>
        </a>
      </div>
    </div>
  );
}
