// What is the event loop in javaScript? Explain with a brief example

console.log("Start here");
setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");
for (let i = 0; i <= 50000; i++) {
  console.log(i);
}
