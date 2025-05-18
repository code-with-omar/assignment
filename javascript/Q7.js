const debounce = (fn, delay) => {
  let timeoutId;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

const sayHello = () => {
  console.log("Hello World !");
};

const debouncedHello = debounce(sayHello, 1000);
debouncedHello();
debouncedHello();
debouncedHello();
debouncedHello();
