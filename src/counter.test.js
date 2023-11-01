import { test, expect, describe, beforeEach } from 'vitest';

import { JSDOM } from 'jsdom';
import { initializeCounter } from './counter';

describe('initializeCounter', () => {
  let dom;
  let countElement;
  let incrementButton;
  let decrementButton;

  beforeEach(() => {
    dom = new JSDOM(`
      <html>
        <body>
          <div>
            <span id="count"></span>
            <button id="increment"></button>
            <button id="decrement"></button>
          </div>
        </body>
      </html>
    `);

    countElement = dom.window.document.getElementById('count');
    incrementButton = dom.window.document.getElementById('increment');
    decrementButton = dom.window.document.getElementById('decrement');
  });

  test('initializes count to 0', () => {
    initializeCounter(dom.window.document);
    expect(countElement.textContent).toBe('0');
  });

  test('increments count', () => {
    initializeCounter(dom.window.document);
    incrementButton.click();
    expect(countElement.textContent).toBe('1');
  });

  test('decrements count', () => {
    initializeCounter(dom.window.document);
    incrementButton.click();
    incrementButton.click();
    decrementButton.click();
    expect(countElement.textContent).toBe('1');
  });

  test('removes event listeners', () => {
    const removeListeners = initializeCounter(dom.window.document);
    removeListeners();
    incrementButton.click();
    decrementButton.click();
    expect(countElement.textContent).toBe('0');
  });
});
