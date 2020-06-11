import React, { useState } from "react";
import { Lists } from "./Lists";
import { Form } from "./Form";

const Test = ({ testLabel, submit, children }) => {
  const [value, setValues] = useState("");
  const [counter, setCounter] = useState(0);
  const handleOnChange = (e) => {
    setValues(e.target.value);
  };
  const handleClickLink = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      {testLabel}
      <label>
        Input text
        <input
          placeholder="input me"
          onChange={handleOnChange}
          type="text"
        ></input>
      </label>
      <a href="https://facebook.com" target="_blank" onClick={handleClickLink}>
        Facebook
      </a>
      <button onClick={submit}>Submit</button>
      {children}
      <p>{value}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {/* <Lists /> */}
      <Form />
    </div>
  );
};

export { Test };
