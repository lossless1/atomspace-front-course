import React from "react";
import "./App.css";
import { Test } from "./Test";

const App = () => {
  const label = "test text";
  const obj = {
    hello: "world",
    hello1: "world1",
  };
  return (
    <Test
      label={obj}
      {...obj}
      testLabel="Test component label"
      submit={() => {
        console.log("SUBMIT");
      }}
    >
      <button>Props Button</button>
    </Test>
  );
};

export default App;
