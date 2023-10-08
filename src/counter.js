export const initializeCounter = () => {
  const countElement = document.getElementById('count');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');

  let count = 0;

  const render = () => {
    countElement.textContent = count;
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
