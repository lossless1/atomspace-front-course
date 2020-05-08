const argName = true;
const argName2 = null;
const argName3 = undefined;
const argName4 = 1250215012;
const argName5 = "lawng\nawl";
const argName6 = Symbol();

console.log("argName", typeof argName);
console.log("argName2", typeof argName2);
console.log("argName3", typeof argName3);
console.log("argName4", typeof argName4);
console.log("argName5", typeof argName5);
console.log("argName6", typeof argName6);

const objectArg = {
  getConsole: function () {
    return "getConsole";
  },
  getObject() {},
  getObject: () => {},
  argKey: argName5,
  objectInObject: {
    key4: {
      key5: {},
    },
  },
};

const arrayarg = [
  123,
  true,
  null,
  undefined,
  Symbol(),
  "aslkgn",
  { alwknf: { asf: {} } },
  [],
];

const { getConsole, ...rest } = objectArg;
console.log(getConsole());
console.log(rest);

let y = 4;
function sum(a, b) {
  y = 6;
  console.log(y);
  function multiply() {
    y = 8;
    console.log(y);
  }
  multiply();
  return a + b;
}

console.log(y);
sum(4, 4);
console.log(y);

const sum2 = (a, b) => {
  return a + b;
};

// console.log(result);
