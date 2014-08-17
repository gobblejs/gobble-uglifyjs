# gobble-uglifyjs

Minify JavaScript files with gobble and [uglifyjs2](https://github.com/mishoo/UglifyJS2/).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-uglifyjs
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).map( 'uglifyjs' );
```

If you want the output to have a `.min.js` extension, add an `options` argument:

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).map( 'uglifyjs', { ext: '.min.js' });
```

To keep the non-minifed version alongside the result of the transformation:

```js
var gobble = require( 'gobble' ), src = gobble( 'src' );
module.exports = [
  src,
  src.map( 'uglifyjs', { ext: '.min.js' })
];
```

## Source code

```js
module.exports = uglifyjs;

function uglifyjs ( code, options ) {
  options.fromString = true;
  return require( 'uglify-js' ).minify( code, options ).code;
};

uglifyjs.defaults = {
  accept: '.js'
};
```


## License

MIT. Copyright 2014 Rich Harris
