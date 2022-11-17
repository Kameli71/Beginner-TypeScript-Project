import "./HangmanDrawing.css"

const head = <div className="head"/>
const body = <div className="body"/>
const rightArm = <div className="right-arm"/>
const leftArm = <div className="left-arm"/>
const rightLeg = <div className="right-leg"/>
const leftLeg = <div className="left-leg"/>

const HangmanDrawing = () => {
  return (
    <div className='HangmanDrawing'>
        {head}
        {body}
        {rightArm}
        {leftArm}
        {rightLeg}
        {leftLeg}
        <div className="bar-vertical-top"/>
        <div className="bar-horizontal-top"/>
        <div className="bar-vertical-bottom"/>
        <div className="bar-horizontal-bottom"/>
    </div>
  )
}

export default HangmanDrawing