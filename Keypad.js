import React from "react";

function Keypad({ handleClick, handleClear, handleCalculate }) {
  return (
    <div className="keypad">
      <div className="row">
        <button
          className="digt"
          onClick={() => {
            handleClick("7");
          }}
        >
          7
        </button>
        <button
          className="digt"
          onClick={() => {
            handleClick("8");
          }}
        >
          8
        </button>
        <button
          className="digt"
          onClick={() => {
            handleClick("9");
          }}
        >
          9
        </button>
        <button
          className="operater"
          onClick={() => {
            handleClick("/");
          }}
        >
          /
        </button>
      </div>
      <div className="row">
        <button
          className="digt"
          onClick={() => {
            handleClick("4");
          }}
        >
          4
        </button>
        <button
          className="digt"
          onClick={() => {
            handleClick("5");
          }}
        >
          5
        </button>
        <button
          className="digt"
          onClick={() => {
            handleClick("6");
          }}
        >
          6
        </button>
        <button
          className="operater"
          onClick={() => {
            handleClick("*");
          }}
        >
          *
        </button>
      </div>
      <div className="row">
        <button
          className="digt"
          onClick={() => {
            handleClick("1");
          }}
        >
          1
        </button>
        <button
          className="digt"
          onClick={() => {
            handleClick("2");
          }}
        >
          2
        </button>
        <button
          className="digt"
          onClick={() => {
            handleClick("3");
          }}
        >
          3
        </button>
        <button
          className="operater"
          onClick={() => {
            handleClick("-");
          }}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="digt"
          onClick={() => {
            handleClick("0");
          }}
        >
          0
        </button>
        <button
          className="fn-keys"
          onClick={() => {
            handleCalculate("=");
          }}
        >
          =
        </button>
        <button
          className="fn-keys"
          onClick={() => {
            handleClear("C");
          }}
        >
          c
        </button>
        <button
          className="operater"
          onClick={() => {
            handleClick("+");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Keypad;
