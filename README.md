# Getting Started with Vite

In this repository, we have a basic Vite setup in place. That is to say, we have Vite and an `index.html` file. Everything is mostly superfluous.

We can get the application started by running either of the following: `npm start` or `npx vite`.

This will start up a development server with a simple webpage.

## Pulling in Some JavaScript

At first, adding a `<script>` tag doesn't seem very exciting, but this is how Vite determines the initial entry point for our application.

In `src/index.js`, let's add the following:

```js
console.log('Hello World!');

document.querySelector('h1').textContent = 'Hello World!';
```

In `index.html`, we'll add a reference to this code:

```js
<script src="/src/index.js"></script>
```

This will give us an error if we put it in the `<head>`, but we're going to ignore that error for a minute.

## Importing Files

In `src/counter.js`, we have the logic for a simple little counter.
