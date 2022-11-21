import "./HangmanWord.css"

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

const HangmanWord = ({ guessedLetters, wordToGuess, reveal= false }: HangmanWordProps) => {
  return (
    <div className="HangmanWord">
      {wordToGuess.split("").map((letter, index) => (
        <span className="span-bottom" key={index}>  
          <span className={`${guessedLetters.includes(letter) || reveal 
          ? "span-word" 
          : "span-word-hidden"} 
          ${!guessedLetters.includes(letter) && reveal ? "red" : "black"}
          `}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord