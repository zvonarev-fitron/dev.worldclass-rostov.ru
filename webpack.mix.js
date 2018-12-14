const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig(
    { 
	devtool: "source-map" 
	output:{
	    filename:'[name].js',
	    chunkFilename: 'js/chunks/[name].js'
	}
    })
    .js('resources/js/site.js', 'public/js')
    .js('resources/js/index.js', 'public/js')
    .js('packages/adminPanel/src/resources/js/admin.js', 'public/js')
    .sass('resources/sass/index.scss', 'public/css')
    .sass('resources/sass/site.scss', 'public/css')
    .sass('packages/adminPanel/src/resources/sass/admin.scss', 'public/css')
    .sourceMaps()
    .version();
