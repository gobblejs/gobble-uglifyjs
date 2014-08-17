module.exports = uglifyjs;

function uglifyjs ( code, options ) {
	options.fromString = true;
	return require( 'uglify-js' ).minify( code, options ).code;
};

uglifyjs.defaults = {
	accept: '.js'
};
