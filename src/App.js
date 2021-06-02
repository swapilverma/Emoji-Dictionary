import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
var emojisWeknow = Object.keys(emojiDictionary)

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this is our database";
      setMeaning(meaning);
    }
    setMeaning(meaning)
  }
  function clickHandler(emoji){
    var meaning = emojiDictionary[emoji]
    setMeaning(meaning)
  }

  return (
    <div className="App">
      <h1>Inside Out!!</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeknow.map(function (emoji){
        return <span onClick = { () => clickHandler(emoji)}style={{cursor: "pointer", fontSize: "2rem", padding:"1 rem"}}key = {emoji}>{emoji}</span> 
        
      }
      )}

    </div>
  );
}
