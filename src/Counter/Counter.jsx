import React from "react";
import { useState } from "react";
function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <h1 data-testid="headerId">My Counter</h1>
      <h2 data-testid="counterId" readOnly>
        {counterValue}
      </h2>
      <button data-testid="subtractBtnId">-</button>
      <input
        data-testid="inputId"
        type="number"
        value={inputValue}
        readOnly
      ></input>
      <button data-testid="addBtnId">+</button>
    </div>
  );
}

export default Counter;
