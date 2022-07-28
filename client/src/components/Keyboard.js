import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default function keyboard(props) {
  const rows = {
    top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    bottom: ["enter", "z", "x", "c", "v", "b", "n", "m", "back"],
  };

  const handleLetter = (letter) => {
    props.onLetter(letter);
  };

  const letterClass =
    "uppercase font-bold px-4 py-2 md:mx-1 mx-0.5 border-solid border-rounded border border-gray-200 text-gray-200 rounded cursor-pointer";

  return (
    <div className="flex flex-col h-screen">
      {/* Keyboard Listener */}
      <KeyboardEventHandler
        handleKeys={["alphabetic", "backspace", "del", "enter"]}
        onKeyEvent={(key, e) => handleLetter(key)}
      />
      {/* On-Screen Keyboard */}
      {["top", "middle", "bottom"].map((row, rowIndex) => {
        {
          return (
            <div className="flex mx-auto mb-4" key={rowIndex}>
              {rows[row].map((letter, i) => {
                return (
                  <div
                    onClick={() => handleLetter(letter)}
                    className={letterClass}
                    key={i}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
