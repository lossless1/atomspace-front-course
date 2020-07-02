import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Block } from "./Block";
import { UserContext, initialValues } from "./context";

function App() {
  const [counter, setCounter] = useState(123123);
  return (
    <UserContext.Provider value={initialValues}>
      <div className="App">
        <Block hello="world" />
      </div>
    </UserContext.Provider>
  );
}

export default App;
