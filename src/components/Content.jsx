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

function Content() {
  console.log(testObject);
  console.log(testObject2);
}

export default Content;
