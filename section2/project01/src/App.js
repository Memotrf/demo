import "./App.css";
import { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState();
  const [selectedOption, setSelectedOption] = useState("checkIsPrime");

  const isPrimeNumber = (value) => {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  };

  const isFibonacciNumber = (num, a = 0, b = 1) => {
    if (num === 0 || num === 1) {
      return true;
    }
    let nextNumber = a + b;
    // eslint-disable-next-line eqeqeq
    if (nextNumber == num) {
      return true;
    } else if (nextNumber > num) {
      return false;
    }
    return isFibonacciNumber(num, b, nextNumber);
  };

  const onOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    findResult(inputNumber, option);
  };

  const findResult = (value, option) => {
    let final;
    if (option === "checkIsPrime") {
      final = isPrimeNumber(value);
    } else {
      final = isFibonacciNumber(value);
    }
    setResult(final);
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    setInputNumber(value);
    findResult(value, selectedOption);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="col-1">
          <input onChange={onInputChange} />
        </div>
        <div className="col-2">
          <select value={selectedOption} onChange={onOptionChange}>
            <option value="checkIsPrime">isPrime</option>
            <option value="checkIsFibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="col-3">
          {inputNumber ? (result ? "true" : "false") : ""} {result}
        </div>
      </div>
    </div>
  );
}

export default App;
