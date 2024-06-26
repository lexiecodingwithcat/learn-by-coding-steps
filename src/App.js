import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

//root component
//export so that the index.js can use it and render it
export default function App() {
  //destruct step and setStep from useState array
  //every react function start from use are react hooks
  //never manually update state, only use set function to update state
  //use const instead of let because immutablity in react
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // if (step < 3) setStep(step + 1);
    //we can use callback function to update state based on current state
    //s is the current state
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
      //but cannot write in this way
      // setStep(step+1);
      // setStep(step+1);
      //only update current state using callback function
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]} </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950F2" onClick={handlePrevious}>
              {" "}
              <span>👈</span>Previous{" "}
            </Button>

            <Button textColor="#fff" bgColor="#7950F2" onClick={handleNext}>
              {" "}
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step{step}</h3>
      {children}
    </div>
  );
}

//children is a pre-defined word to child props
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
