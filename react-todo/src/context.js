const { createContext } = require("react");

export const initialValues = {
  hello: "world",
  counter: 0,
  stepper: 0,
  form: {
    username: "Petya",
    surname: "Ivanov",
  },
};

export const UserContext = createContext(initialValues);
