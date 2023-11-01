let count = 0;

const increment = () => {
  count++;
};

const decrement = () => {
  count--;
};

const reset = () => {
  count = 0;
};

const render = (element) => {
  element.textContent = count;
};
