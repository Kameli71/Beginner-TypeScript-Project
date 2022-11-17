import { useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import HangmanKeyboard from "./components/HangmanKeyboard"
import "./App.css"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)] // Donne un rendu de longueur de lettres par rapport à ceux de ma liste
  })
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className="App">
      <div className="result"> Lose win</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <HangmanKeyboard/>
    </div>
  )
}

export default App
