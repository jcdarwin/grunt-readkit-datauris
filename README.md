# grunt-readkit-datauris

> A grunt task to base 64 encode files as data URIs for use with Readk.it.

This plugin is based on the [grunt-base64 plugin](https://github.com/BrightcoveOS/grunt-base64) by David LaPalomento of BrightCove.

There are a number of good grunt plugins that do slightly more interesting things with base64 encoding like replace image URLs in your stylesheets with data URIs ([grunt-image-embed](https://github.com/ehynds/grunt-image-embed), for instance). This task just wraps node.js's native base64 encoding capabilities into a grunt task; it's up to you to find something interesting to do with the output.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-readkit-datauris --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-readkit-datauris');
```

## The "readkit_datauris" task

### Overview
In your project's Gruntfile, add a section named `readkit_datauris` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  // Assemble data URIs for use in the solo version
  readkit_datauris: {
    your_target: {
      options: {
        base: 'src/epub'
      },
      src: ['src/epub/META-INF/container.xml', 'src/epub/OEBPS/content.opf', '<%= readkit_dom_munger.data.manifestRefs %>'],
      dest: 'build/readkit/js/app/content.js'
    },
  },
})
```

### Options
The readkit_datauris task takes one option ```base``` which specifies the assumed base working directory for the URIs.

### Output
We produce a file that looks something like:

```js
define({
    URIs: {
       'OEBPS/whatever.html':  'data:text/html;base64,PD94bWwgdmVyc2lv...',
       'OEBPS/whichever.html': 'data:text/html;base64,4NCiAgICAgICAgIc...'
    }
});
```

For more information, consult the [grunt-base64](https://github.com/BrightcoveOS/grunt-base64) documentation.

## Release History
0.1.0: Initial release (grunt-base64 0.1.0)
