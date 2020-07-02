import React, { useContext } from "react";
import { UserContext, initialValues } from "./context";
import { SubBlock } from "./SubBlock";

export const Block = (props) => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <UserContext.Provider value={initialValues.stepper}>
      <div>
        <SubBlock></SubBlock>
      </div>
    </UserContext.Provider>
  );
};
