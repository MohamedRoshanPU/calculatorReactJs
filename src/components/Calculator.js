import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const textValue = (e) => {
    let txt = text + e.target.name
    setText(txt);
  };

  const clear = () => {
    setText(text.slice(0, text.length - 1));
  };

  const deleteAll = () => {
    setText("");
    setResult("");
  };

  const findResult = () => {
    try {
      setResult(eval(text).toFixed(5));
    } catch (error) {
      setResult("Syntax error");
    }
  };

  return (
    <div className="Calculator">
      <div className="container">
        <h3>React js Calculator App</h3>
        <div className="calculator-contents">
          <div className="screen">
            {result}
            <div className="span">
              <span>({text})</span>
            </div>
          </div>
          <div className="buttons-wrapper">
            <div className="dlt">
              <button name="=" onClick={deleteAll}>
                DEL
              </button>
            </div>
            <div>
              <button name="7" onClick={textValue}>
                7
              </button>
            </div>
            <div>
              <button name="8" onClick={textValue}>
                8
              </button>
            </div>
            <div>
              <button name="9" onClick={textValue}>
                9
              </button>
            </div>
            <div className="operators">
              <button name="/" onClick={textValue}>
                /
              </button>
            </div>
            <div>
              <button name="4" onClick={textValue}>
                4
              </button>
            </div>
            <div>
              <button name="5" onClick={textValue}>
                5
              </button>
            </div>
            <div>
              <button name="6" onClick={textValue}>
                6
              </button>
            </div>
            <div className="operators">
              <button name="*" onClick={textValue}>
                x
              </button>
            </div>
            <div>
              <button name="1" onClick={textValue}>
                1
              </button>
            </div>
            <div>
              <button name="2" onClick={textValue}>
                2
              </button>
            </div>
            <div>
              <button name="3" onClick={textValue}>
                3
              </button>
            </div>
            <div className="operators">
              <button name="+" onClick={textValue}>
                +
              </button>
            </div>
            <div className="operators">
              <button name="-" onClick={textValue}>
                -
              </button>
            </div>
            <div>
              <button name="." onClick={textValue}>
                .
              </button>
            </div>
            <div>
              <button name="0" onClick={textValue}>
                0
              </button>
            </div>
            <div>
              <button onClick={clear}>C</button>
            </div>
            <div className="equals">
              <button onClick={findResult}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
