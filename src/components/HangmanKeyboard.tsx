import styles from "./HangmanKeyboard.module.css"

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  activeLetters: string[],
  disabled?: boolean, 
  inactiveLetters: string[], 
  addGuessedLetter: (letter: string) => void
}

const HangmanKeyboard = ({ activeLetters, disabled = false, inactiveLetters, addGuessedLetter }:KeyboardProps) => {
  return (
    <div className="HangmanKeyboard">
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return <button onClick={() => addGuessedLetter(key)}
        className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}  
        disabled={isInactive || isActive || disabled}
        key={key}
        >
          {key}
        </button>
      })}
    </div>
  )
}

export default HangmanKeyboard