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
module.exports = gobble( 'src' ).transform( 'uglifyjs' );
```

If you want the output to have a `.min.js` extension, add an `options` argument:

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'uglifyjs', { ext: '.min.js' });
```

To keep the non-minifed version alongside the result of the transformation:

```js
var gobble = require( 'gobble' ), src = gobble( 'src' );
module.exports = [
  src,
  src.transform( 'uglifyjs', { ext: '.min.js' })
];
```

By default, sourcemaps are created. To disable, pass a `sourceMap: false` option.


## License

MIT. Copyright 2014-15 Rich Harris
