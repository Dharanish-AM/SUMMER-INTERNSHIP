import React, { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const maxLimit = 100;
  const minLimit = -50;

  useEffect(()=>{
    if(count<0){
      let timer = setTimeout(()=>{
        setCount(0)
      },5000)

      return ()=>clearTimeout(timer)
    }
  },[count])

  const increment = () => {
    setCount((prevCount) => Math.min(prevCount + step, maxLimit));
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - step, minLimit));
  };

  const reset = () => {
    setCount(0);
    setStep(1);
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStep(Math.max(1, value));
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <h2 className="count-display">{count}</h2>

      <div className="step-control">
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            className="step-input"
          />
        </label>
      </div>

      <div className="button-group">
        <button
          onClick={increment}
          className="btn btn-increment"
          disabled={count >= maxLimit}
        >
          Increment (+{step})
        </button>
        <button
          onClick={decrement}
          className="btn btn-decrement"
          disabled={count <= minLimit}
        >
          Decrement (-{step})
        </button>
        <button
          onClick={reset}
          className="btn btn-reset"
          disabled={count === 0 && step === 1}
        >
          Reset
        </button>
      </div>

      {count >= maxLimit && (
        <p className="limit-message">Maximum limit reached ({maxLimit})</p>
      )}
      {count <= minLimit && (
        <p className="limit-message">Minimum limit reached ({minLimit})</p>
      )}
    </div>
  );
}

export default Counter;
