import React from "react";

export const Lists = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6, 7, 1];

  return (
    <div>
      {arrNumber.map((num, index) => {
        return (
          <li key={index}>
            <p>{num}</p>
          </li>
        );
      })}
    </div>
  );
};
