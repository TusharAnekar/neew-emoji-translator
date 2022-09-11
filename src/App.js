import './App.css';
import { useState } from 'react';

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🪔": "Diya Lamp",
  "⚽": "Football",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🐵": "Monkey Face",
  "🐶": "Dog Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

function App() {

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have transaltion of this emoji in our dictionary.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">

      <div className='Header'>
        <h1> Emoji Translator</h1>
        <p>This application helps user to find out what is the meaning of 12 emojis.</p>
      </div>

      <img src="/images/emoji.jpg" alt=''></img>

      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know:</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer>
      <h3>Connect with me here:</h3>
        <a class="footer-links" href="https://www.linkedin.com/in/tushar-anekar-435033a9/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="footer-links" href="https://twitter.com/TusharAnekar" target="_blank" rel="noreferrer">Twitter</a>
        <a class="footer-links" href="https://github.com/TusharAnekar" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
