import "./HangmanDrawing.css"

const head = <div className="head"/>
const body = <div className="body"/>
const rightArm = <div className="right-arm"/>
const leftArm = <div className="left-arm"/>
const rightLeg = <div className="right-leg"/>
const leftLeg = <div className="left-leg"/>

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className='HangmanDrawing'>
        {bodyParts.slice(0, numberOfGuesses)}
        <div className="bar-vertical-top"/>
        <div className="bar-horizontal-top"/>
        <div className="bar-vertical-bottom"/>
        <div className="bar-horizontal-bottom"/>
    </div>
  )
}

export default HangmanDrawing