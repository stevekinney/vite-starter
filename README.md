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

```html
<script src="/src/index.js"></script>
```

This will give us an error if we put it in the `<head>`, but we're going to ignore that error for a minute.

## Importing Files

In `src/counter.js`, we have the logic for a simple little counter. Let's pull it into `src/index.js`.

```js
import { initializeCounter } from './counter';

console.log('Hello World!');

document.querySelector('h1').textContent = 'Hello World!';

initializeCounter();
```

This will blow up in a new and different way. You should see an error that looks something like this:

> index.js:1 Uncaught SyntaxError: Cannot use import statement outside a module

Luckily, this is an easy fix.

```html
<script type="module" src="/src/index.js"></script>
```

This fixes both issues:

1. Imports work as expected.
2. The DOM is loaded by the time our script runs.

You can read more about `type="module"` [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type).

## Building

You can build the application using either:

1. `npm run build`
2. `npx vite build`

This will create a `dist` folder with the compiled output. The output will look something along these lines:

```tree
dist
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── assets
│   └── index-03e7ded5.js
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

It's everything in the `public` directory, our `index.html`, and the compiled bundle in an `assets` directory. In this case, it does some basic inlining and minification. There is nothing particularly special to see here.

## Dynamic Imports

In the previous example, even through we've broken our code up between two modules, Rollup is smart enought to figure out that they're all loaded at the same time and inlines them.

If we used a `import()` to load our file dynamically, we'll see that it's smart enough to split up our code.

```js
import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});
```

We'll now see that we have two assets.

```
dist
├── …
├── assets
│   ├── counter-7777d3c9.js
│   └── index-1060a589.js
└── …
```

### Hot Module Replacement

Out of the box, Vite supports hot module replacement. This means that if you edit a file. Only that file will be replaced and the rest of the application will continue remain. This allows Vite to refresh the page quickly and maintain the state between reloads.

Most of the time, when we're using a framework, we don't have to think about it and we'll get this for free. But, if we're doing something that has side effects, we may want to clean up after ourselves.

`initializeCounter()` returns a function that removes its event listeners. In the code below, we're going to:

1. Dynamically load `src/counter.js`
2. Call `initialzeCounter()` and store its `cleanup` function.
3. If the module is replaced using hot module reloading, we'll clean up the event listeners from the old one and then reinitialize the counter.

```js
import('./counter.js').then(({ initializeCounter }) => {
  const cleanup = initializeCounter();

  if (import.meta.hot) {
    import.meta.hot.accept(({ module }) => {
      cleanup();
      cleanup = module.initializeCounter();
    });
  }
});
```

If this code seems like a lot, keep in mind two things:

1. This will be stripped out of the final build.
2. Most frameworks will do this for you under the hood. This might be the most that you ever have to think about it.

## Exercise: Dynamic Loading

This is a little bit contrived, but we're going to work with what we have. If the count goes negative, we want to show a banner.

We'll probably start with something like this:

```js
const render = () => {
  countElement.textContent = count;

  if (count < 0) {
    // Your code here.
  }
};
```

<details><summary>Solution</summary>

```js
const render = () => {
  countElement.textContent = count;

  if (count < 0) {
    import('./add-banner.js').then(({ addBanner }) => {
      addBanner('The counter is negative!');
    });
  }
};
```

</details>

## Adding CSS

Vite gives a few different ways to add CSS.

1. We can add `<link>` tags as we've done for years.
2. We can import the CSS files from our JavaScript.
3. We can use CSS Modules.

### Using a `<link>` tag

Let's start with the most boring, but straight forward of the bunch. Add the following to your HTML.

```html
<link rel="stylesheet" href="/src/style.css" />
```

### Importing a Stylesheet

In `counter.js`, we can import a stylesheet.

```js
import './counter.css';
```

In both cases, the CSS is loaded globally. The notable difference here is that this CSS file will only be loaded when this module is loaded.

## Using CSS Modules

If you look closely, you'll notice that this CSS is _not_ rendering.

```css
.count {
  font-size: 4em;
  color: rebeccapurple;
}
```

This makes sense, because because we don't have anything with that class.

If we give a CSS file a `*.module.css` extension, then we can access its fingerprinted classes.

```js
import styles from './counter.module.css';

// …

countElement.classList.add(styles.count);
```

This is the resulting class name.

```html
<p id="count" class="_count_1o9rn_1">4</p>
```

### Exercise: Add Banner

- Can you add an additional script that shows a banner or an alert when the count gets below zero?
- Can you use `banner.module.css` as a CSS module?

<details><summary>Solution</details>

```js
import styles from './banner.module.css';

// …

banner.classList.add(styles.banner);
closeButton.classList.add(styles.button);
```

</details>

Notice how the CSS file is also dynamically added to the DOM as needed.

## Using SCSS or Sass

Using SCSS (or Sass) is relatively straight-forward. Consider this change to our CSS.

```scss
.button {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
```

We _could_ change the import to `./banner.module.scss`, but you'll see we get a _very_ easy to resolve error.

> Preprocessor dependency "sass" not found. Did you install it? Try `npm install -D sass`.

Well, I guess we can handle this. That's it. Everything works as expected.

## Using TypeScript

Okay, but let's say you wanted to use TypeScript. That's probably a lot of set up, right?

Just change the file extension to `.ts`. That's it.

## Using TypeScript with CSS Modules

With a few minor changes, `add-banner.ts` works as expected. But, TypeScript is annoyed by the CSS module and the fact that it doesn't know it's type.

We're going to solve for this by using a little library called `typed-css-modules`.

```sh
npm install -D typed-css-modules
```

Next, we can run `tcm src` and it will generate a `.d.ts` file for each CSS file.

If you want to keep this running, you can do something like this in your `package.json`.

```json
{
  "scripts": {
    "watch": "vite & tcm --watch src",
    "check:css": "tcm --listDifferent src"
  }
}
```

Or, if you use husky, you can automate this whenever you commit a change to a CSS file. In `.husky/pre-commit`:

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run check:css
```
