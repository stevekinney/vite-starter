// import { initializeCounter } from './counter';

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
