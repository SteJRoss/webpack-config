import "./styles/index.scss";

const testObject = {
  example1: 1,
  example2: 2,
  example3: 3,
};

const testObject2 = {
  ...testObject,
  example4: 4,
  example3: -3,
};

console.log(testObject);
console.log(testObject2);
