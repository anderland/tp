(function() {
    'use strict';

    var gulp = require('gulp-help')(require('gulp'));
    var u = require('gulp-util');
    var log = u.log;
    var c = u.colors;
    var del = require('del');
    var spawn = require('child_process').spawn;
    var sequence = require('run-sequence');
    var plumber = require('gulp-plumber');
    var csslint = require('gulp-csslint');
    var scsslint = require('gulp-scss-lint');
    // Utils
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var prettify = require('gulp-prettify');
    var rename = require('gulp-rename');
    var streamqueue = require('streamqueue');
    var diff = require('gulp-diff');
    var sourcemaps = require('gulp-sourcemaps');
    var vinylpaths = require('vinyl-paths');
    let babel = require('gulp-babel');
    // Compilers 
    var sass = require('gulp-sass');
    var haml = require('gulp-ruby-haml');
    // Post
    var postcss = require('gulp-postcss');
    var postscss = require('postcss-scss');
    var removeprefixes = require('postcss-remove-prefixes');
    var gradientfixer = require('postcss-gradientfixer');
    var flexboxfixer = require('postcss-flexboxfixer');
    var autoprefixer = require('autoprefixer');
    var discardcomments = require('postcss-discard-comments');
    var discardduplicates = require('postcss-discard-duplicates');
    var sorting = require('postcss-sorting');
    var unique = require('postcss-unique-selectors');
    var cssnano = require('cssnano');
    var stylelint = require('stylelint');
    var perfectionist = require('perfectionist');
    // Critical
    var imagemin = require('gulp-imagemin');
    var uncss = require('postcss-uncss');
    var critical = require('critical').stream;
    var htmlmin = require('gulp-htmlmin');
    const {
        phpMinify
    } = require('@cedx/gulp-php-minify');
    // Life Saver
    var fileinclude = require('gulp-file-include');

    // Laundry
    var bleach = [
        discardcomments(),
        removeprefixes(),
        gradientfixer(),
        flexboxfixer(),
        discardduplicates(),
        unique(),
        sorting(),
        // perfectionist()
    ];
    var steam = [
        discardcomments(),
        removeprefixes(),
        discardduplicates(),
        unique(),
        sorting(),
        // perfectionist()
    ];
    var wash = [
        discardcomments(),
        // removeprefixes(),
        gradientfixer(),
        flexboxfixer(),
        autoprefixer({
            browsers: ['last 3 version', 'ie 9']
        }),
        // perfectionist()
    ];
    var fold = [
        cssnano({
            discardComments: {
                removeAll: true
            }
        })
    ];
    var cut = [
        uncss({
            html: ['https://area24.ilsole24ore.com/trust/index.html']
            // html: ['http://127.0.0.1:88/index.html', 'http://127.0.0.1:88/author.html', 'http://127.0.0.1:88/NewsArticle.html']

        })
    ];



    gulp.task('include', function() {
        gulp.src(['index.html'])
            .pipe(plumber())
        fileinclude({
                prefix: '@@',
                basepath: '@file'
            })
            .pipe(gulp.dest('./'));
    });


    // Haml
    gulp.task('haml', function() {
        gulp.src('./haml/**/[^_]*.haml')
            .pipe(plumber())
            .pipe(haml({
                require: ["./render.rb"],
                doubleQuote: true
            }).on('error', function(e) {
                console.log(e.message);
            }))
            .pipe(prettify({
                indent_size: 1
            }))
            .pipe(gulp.dest('./'));
    });

    // Php
    gulp.task('php', function() {
        gulp.src('./haml/**/[^_]*.haml', {
                read: false
            })
            .pipe(plumber())
            .pipe(haml({
                require: ["./render.rb"],
                ext: '.php'
            }))
            .pipe(gulp.dest('./p'));
    });

    // bulma
    gulp.task('bulma', function() {
        gulp.src('./bulma/bulma.sass')
            .pipe(plumber())
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./bulma/css/'));
    });

    // area
    gulp.task('trust', function() {
        return streamqueue({
                    objectMode: true
                },
                gulp.src(['./sass/bulma.sass'])
                .pipe(plumber())
                .pipe(sass().on('error', sass.logError)),
                gulp.src(['./scss/trust.scss'])
                .pipe(plumber())
                .pipe(sass().on('error', sass.logError))
            )
            .pipe(concat('main.css'))
            .pipe(postcss(wash))
            .pipe(gulp.dest('./dist/css/'))
            .pipe(postcss(fold))
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/css/'));
    });


    // Javascript
    gulp.task('js:up', function() {
        return gulp.src([
                './node_modules/fg-loadcss/dist/loadCSS.min.js',
                './node_modules/loadjs/dist/loadjs.min.js',
                // './js/testlocation.js',
                './js/bulma.js',
                './js/up.js'
            ])
            .pipe(concat('up.js'))
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(uglify())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });

    gulp.task('js:up-en', function() {
        return gulp.src([
                './node_modules/fg-loadcss/dist/loadCSS.min.js',
                './node_modules/loadjs/dist/loadjs.min.js',
                // './js/testlocation.js',
                './js/bulma.js',
                './js/up-en.js'
            ])
            .pipe(concat('up-en.js'))
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(uglify())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });


    gulp.task('js:down', function() {
        return gulp.src([
                // './js/bulma.js',
                // './js/down.js'

            ])
            .pipe(concat('down.js'))
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(uglify())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });

    gulp.task('js:after', function() {
        return gulp.src([
                './bower/basket.js/dist/basket.js',
                './bower/rsvp/rsvp.js',
                './bower/sizzle/dist/sizzle.js',
                './bower/enquire/dist/enquire.js',
                './bower/fontfaceobserver/fontfaceobserver.js',
                './js/modernizr-custom.js',
                './node_modules/smooth-scroll/dist/smooth-scroll.polyfills.js',
                './js/after.js'

            ])
            .pipe(concat('after.js'))
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(uglify())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });


    gulp.task('js:vanilla', function() {
        return gulp.src([
                './bower/classie/classie.js',
                './bower/lazysizes/plugins/respimg/ls.respimg.js',
                // './bower/picturefill/dist/picturefill.js',
                './bower/lazysizes/plugins/unveilhooks/ls.unveilhooks.js',
                './bower/lazysizes/plugins/aspectratio/ls.aspectratio.js',
                // './bower/lazysizes/plugins/parent-fit/ls.parent-fit.js',
                './bower/lazysizes/plugins/bgset/ls.bgset.js',
                './bower/lazysizes/plugins/progressive/ls.progressive.js',
                './bower/lazysizes/lazysizes.js',
                './bower/Stickyfill/src/stickyfill.js'


            ])
            .pipe(concat('vanilla.js'))
            .pipe(plumber())
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });

    gulp.task('js:live', function() {
        return gulp.src([

                './js/live.js',

            ])
            .pipe(concat('live.js'))
            .pipe(plumber())
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(uglify())
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });


    gulp.task('js:jquery', function() {
        return gulp.src([
                './bower/mustache.js/mustache.js',
                // './assets/plugins/jquery-ui/jquery-ui.min.js',
                // './assets/plugins/jquery/jquery-easy.js',
                // './assets/plugins/jquery-unveil/jquery.unveil.min.js',
                // './assets/plugins/jquery-bez/jquery.bez.min.js',
                // './assets/plugins/jquery-ios-list/jquery.ioslist.min.js',
                // './assets/plugins/jquery-actual/jquery.actual.min.js',
                // './assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js',
                // './bower/select2/dist/js/select2.full.js',
                // './assets/plugins/switchery/js/switchery.min.js',

                // './bower/js-cookie/src/js.cookie.js',

                // './bower/matchHeight/jquery.matchHeight.js',
                './bower/jquery-smooth-scroll/jquery.smooth-scroll.js',
                // './js/jquery.ba-bbq.js'

                // './gold/m/js/liveblogs.js',
                // './gold/m/js/header.js',
                // './gold/m/js/article.js',
            ])
            .pipe(concat('jquery.js'))
            .pipe(gulp.dest('./dist/js/src/'))
            .pipe(uglify(

            ))
            .pipe(rename({
                suffix: ".min"
            }))
            .pipe(gulp.dest('./dist/js/'));
    });

    gulp.task('uncss', function() {
        return gulp.src(['./dist/css/main.min.css'])

        .pipe(postcss(cut))

        // .pipe(uncss({
        // html: ['https://area24.ilsole24ore.com', 'https://area24.ilsole24ore.com/featured', 'https://area24.ilsole24ore.com/news/il-giornale-del-futuro-in-che-direzione-stiamo-andando']
        // html: ['http://127.0.0.1:90/home', 'http://127.0.0.1:90/art']                
        // }))
        // .pipe(postcss(wash))
        // .pipe(gulp.dest('./dist/css/'))
        // .pipe(postcss(fold))
        .pipe(rename({
                suffix: ".crit"
            }))
            .pipe(gulp.dest('./dist/css/'));
    });


    gulp.task('phpminify', () => gulp.src('./templates/dist/php/**/*.php', {
            read: false
        })

        .pipe(phpMinify())
        .pipe(gulp.dest('./templates/dist/php/minified/'))
    );

    gulp.task('htmlminify', () => gulp.src('./templates/dist/html/**/*.html')

        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./templates/dist/html/minified/'))
    );

    gulp.task('js', ['js:up', 'js:up-en', 'js:down', 'js:after', 'js:jquery', 'js:vanilla', 'js:live']);
    gulp.task('postsass', function() {
        return gulp.src(['./scss/partials/_core.scss'])
            .pipe(postcss(steam, {
                syntax: postscss
            }))
            .pipe(gulp.dest('./tmp/scss'));
    });

    // list of ccslint rules

    // adjoining-classes
    // box-model
    // box-sizing
    // bulletproof-font-face
    // compatible-vendor-prefixes
    // empty-rules
    // display-property-grouping
    // duplicate-background-images
    // duplicate-properties
    // fallback-colors
    // floats
    // font-faces
    // font-sizes
    // gradients
    // ids
    // import
    // important
    // known-properties
    // outline-none
    // overqualified-elements
    // qualified-headings
    // regex-selectors
    // shorthand
    // star-property-hack
    // text-indent
    // underscore-property-hack
    // unique-headings
    // universal-selector
    // unqualified-attributes
    // vendor-prefix
    // zero-units

    gulp.task('css-lint', function() {
        gulp.src('./dist/css/main.css')
            .pipe(csslint({
                'adjoining-classes': false,
                'compatible-vendor-prefixes': false
            }))
            .pipe(csslint.reporter());
    });
    gulp.task('scss-lint', function() {
        return gulp.src('./scss/*.scss')
            .pipe(scsslint());
    });
    gulp.task('clean', function() {
        del(['./tmp', './dist/js', './dist/css', './dev', './demo', './partial', './inc', '*.html', './templates/dist']);
    });

    gulp.task('default', ['trust', 'js']);

    gulp.task('build', ['js', 'haml', 'default']);

}());