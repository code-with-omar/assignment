// Q6. What are closures? Provide a simple example.

const outerFunction = () => {
  let outerVariable = "Hi, I'm outer scope";
  const innerFunction = () => {
    console.log(outerVariable);
  };
  return innerFunction;
};
const myClosure = outerFunction();
myClosure();

//another example

const outer = () => {
  let counter = 0;

  const inner = () => {
    counter++;
    console.log(counter);
  };

  return inner;
};

const count = outer();
count(); // logs: 1
count(); // logs: 2
count(); // logs: 3
