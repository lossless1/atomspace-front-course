import React, { useContext } from "react";
import { UserContext } from "./context";

export const SubBlock = (props) => {
  const context = useContext(UserContext);
  console.log(context);
  return <div>SubBlock</div>;
};
