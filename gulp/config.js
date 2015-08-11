var dest = "./build";
var outputDocsFolder = dest + "/docs"
var src = './src';
var pkg = require('../package');

//used both for Source reference and Order reference
var buildOrder = [

               ];

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    },
    sass: {
        src: src + "/sass/**/*.{sass,scss}",
        dest: dest,
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'images' // Used by the image-url helper
        }
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/images"
    },
    markup: {
        src: src + "/htdocs/**",
        dest: dest
    },
    iconFonts: {
        name: 'Gulp Starter Icons',
        src: src + '/icons/*.svg',
        dest: dest + '/fonts',
        sassDest: src + '/sass',
        template: './gulp/tasks/iconFont/template.sass.swig',
        sassOutputName: '_icons.sass',
        fontPath: 'fonts',
        className: 'icon',
        options: {
            fontName: 'Post-Creator-Icons',
            appendCodepoints: true,
            normalize: false
        }
    },
    browserify: {
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [
            /*{
                        entries: src + '/app.jsx',
                        dest: dest,
                        outputName: 'global.js',
                        // Additional file extentions to make optional
                        extensions: ['.coffee', '.hbs'],
                        // list of modules to make require-able externally
                        require: []
                            // See https://github.com/greypants/gulp-starter/issues/87 for note about
                            // why this is 'backbone/node_modules/underscore' and not 'underscore'
                }, */
            {
                entries: src + '/app.jsx',
                dest: dest,
                outputName: 'app.js',
                // list of externally available modules to exclude from the bundle
                external: []
    }]
    },



    lint: {
        scriptFiles: buildOrder
    },

    production: {
        cssSrc: dest + '/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
};
