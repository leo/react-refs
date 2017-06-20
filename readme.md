# react-refs

Since [string references](https://facebook.github.io/react/docs/refs-and-the-dom.html#legacy-api-string-refs) have been removed from [react](https://facebook.github.io/react/) for [multiple reasons](https://github.com/facebook/react/pull/8333#issuecomment-271648615), we as developers were forced to create a new function each time we set such a string reference for a [react](https://facebook.github.io/react/) element or component.

To avoid this and bring back the convenience of string references (even at the cost of a few minor problems, as mentioned above), I've built this library.

Despite of all the things linked above, using this project is perfectly fine. Because either way, you should ensure to use string references [as less as possible](https://facebook.github.io/react/docs/refs-and-the-dom.html#dont-overuse-refs). But when you do, you'll probably built a logic like [this one](https://github.com/leo/react-refs/blob/master/index.js) by yourself (I usually do that), so this packagage simply abstracts this part in the best way.

## Usage

Firstly, install the package using [npm](https://www.npmjs.com):

```bash
npm install --save react-refs
```

Then load it:

```js
import setRef from 'react-refs'
```

Next, initialize the package in your `constructor`:

```js
constructor(props) {
  super(props)
  this.setReference = setRef.bind(this)
}
```

As the final step, you can create a reference in `render` (using the example code mentioned below, your reference will live inside the `this.example` property):

```jsx
<Example ref={this.setReference} name="example"/>
```

### Increasing Performance

The package is already binding in `constructor` to make re-rendering as fast as possible out of the box. But if you want to get the maximum out of performance, I suggest pre-filling each reference with `null` in `constructor` ([v8](https://developers.google.com/v8/) likes it a lot when you tell it as much as possible ahead of time):

```js
constructor(props) {
  super(props)
  this.setReference = setRef.bind(this)
  
  // Based on the "name" property of the <Example/> component above
  this.example = null
}
```

## Caught a Bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the electron app of your choice, link it to the dependencies: `npm link react-refs`. Instead of the default one from [npm](https://www.npmjs.com), it will now use your local clone of the package!

## Author

- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo))
