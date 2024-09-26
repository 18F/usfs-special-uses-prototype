/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.dist.css = './site/assets/css';
uswds.paths.dist.theme = './src/sass/uswds';
uswds.paths.dist.img = './site/assets/uswds/images';
uswds.paths.dist.fonts =  "./site/assets/uswds/fonts";
uswds.paths.dist.js = "./site/assets/uswds/js";

/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;