/*
** grunt-readkit-datauris
**
** We produce a file that looks something like:
**   define({
**       URIs: {
**          'OEBPS/whatever.html':  'data:text/html;base64,PD94bWwgdmVyc2lv...',
**          'OEBPS/whichever.html': 'data:text/html;base64,4NCiAgICAgICAgIc...'
**       }
**   });
*/

'use strict';

var mime = require("mime");

module.exports = function(grunt) {

  grunt.registerMultiTask('readkit_datauris', 'Readk.it data URIs.', function() {
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var files;

      // read the source files
      var buffers = f.src.map(function(filepath) {
        grunt.log.writeln('Base64 encoding "' + filepath + '".');
        files = (!files) ? 'define({ URIs: {' : files + ", \n";

        var content = grunt.file.read(filepath, {
            encoding: null
        });

        var type = mime.lookup(filepath);
        var data = new Buffer(content, "binary").toString('base64');

        if (options.base) {
          filepath = filepath.replace(options.base, '');
        }

        files += "'" + filepath + "': '" + "data:" + type + ";base64," + data + "'";
      });
      
      files += '} });';
      grunt.file.write(f.dest, files);

      // Print a success message
      grunt.log.writeln('Base64 encoded "' + f.dest + '".');
    });

  });

};
