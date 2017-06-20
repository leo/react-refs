# react-refs

Easily set references to React elements

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

As the final step, you can create a reference in `render` (using the example below, your reference will live inside `this.example`):

```jsx
<Example ref={this.setReference} name="example"/>
```

## Caught a Bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the electron app of your choice, link it to the dependencies: `npm link react-refs`. Instead of the default one from [npm](https://www.npmjs.com), it will now use your local clone of the package!

## Author

- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo))
