import React from "react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

const quotes = [
  {
    quote:
      "It’s your place in the world, it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison",
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills",
  },
  {
    quote: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    quote:
      "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
];

function QuoteBox() {
  const [index, setIndex] = useState(0); // setting first quote as default.
  const [buttonAndPageColor, setButtonAndPageColor] = useState('#ccc'); // Initial color
  function newQuote() {
    const newColor = getRandomColor();
    let newIndex = Math.floor(Math.random() * (quotes.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
    setIndex(newIndex);

    // Change the button and page color to the same color
    setButtonAndPageColor(newColor);
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="flex min-w-sm items-center h-screen w-full">
      <div className="w-96 h-72 bg-white mx-auto flex items-center rounded md:w-600">
        <div className="flex flex-col space-y-3">
          <div className="flex justify-center items-center">
            <h2 className="font-sans text-center text-2xl antialiased p-2 font-bold text-slate-400"  style={{ color: buttonAndPageColor }}>
              {quotes[index].quote}
            </h2>
          </div>
          <div>
            <h3 className="font-sans text-end text-slate pr-6"  style={{ color: buttonAndPageColor }}>
              -{quotes[index].author}
            </h3>
          </div>
          <div id="buttons" className="flex justify-between">
            <div id="social" className="flex ml-12 space-x-3 mt-3">
              <div id="twitter" className="w-11 h-11 rounded flex justify-center items-center"  style={{ backgroundColor: buttonAndPageColor }}>
                <a href="https://twitter.com/Twitter" className="font-sans">
                <FaXTwitter className="text-white w-6 h-6"/>
                </a>
              </div>
              <div id="facebook" className="w-11 h-11 flex rounded justify-center items-center"  style={{ backgroundColor: buttonAndPageColor }}>
                <a href="https://www.facebook.com/facebook" className="font-sans">
                <LuFacebook className="text-white w-6 h-6"/>
                </a>
              </div>
            </div>
            <div id="new-quote" className="flex">
              <button
                onClick={newQuote}
                className="mx-5 p-2 rounded h-11 mt-3 text-white"
                style={{ backgroundColor: buttonAndPageColor }}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
