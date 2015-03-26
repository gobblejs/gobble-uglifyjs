module.exports = uglifyjs;

function uglifyjs ( code, options ) {
	options.fromString = true;
	options.outSourceMap = options.sourceMap !== false;

	return require( 'uglify-js' ).minify( code, options );
}

uglifyjs.defaults = {
	accept: '.js',
	sourceMap: true
};
