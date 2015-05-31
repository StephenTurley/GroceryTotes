/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    css:{
      vendor: [
        "vendor/bower/foundation/css/foundation.css",
        "vendor/bower/foundation/css/normalize.css",
        "vendor/css/**/*.js"
      ]  
    },
    js: {
      vendor: [
          "vendor/bower/jquery/dist/jquery.js",
          "vendor/bower/fastclick/lib/fastclick.js",
          "vendor/bower/foundation/js/foundation.js",
          "vendor/bower/angular/angular.js",
          "vendor/bower/angular-route/angular-route.js",
          "vendor/js/**/*.js"
      ]
    }
  };
};
