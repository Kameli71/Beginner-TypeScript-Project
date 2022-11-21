import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import HangmanKeyboard from "./components/HangmanKeyboard"
import "./App.css"

function getWord() {
  return words[Math.floor(Math.random() * words.length)] // Donne un rendu de longueur de lettres par rapport à ceux de ma liste
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))
  
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return //clavier

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    } //sert à rafraîchir un nouveau mot en appuyan sur entrer

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className="App">
      <div className="result">
        {isWinner && "Bien joué champion ! - Appuie sur Entrée ou rafraîchis la page pour recommencer !"}
        {isLoser && "Perdu loser ! - Appuie sur Entrée ou rafraîchis la page pour retenter ta chance !"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div className="keyboard-container">
        <HangmanKeyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}/>
      </div>
    </div>
  )
}

export default App
