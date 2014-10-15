module.exports = uglifyjs;

function uglifyjs ( code, options ) {
	options.fromString = true;
	options.outSourceMap = this.mapname;

	return require( 'uglify-js' ).minify( code, options );
}

uglifyjs.defaults = {
	accept: '.js'
};
