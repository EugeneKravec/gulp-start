const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browseSync = require('browser-sync').create();

function browsersync() {
    browseSync.init({
        server: {
            baseDir: 'app/'
        }
    })
};

// Minimisation the scss and reload page
function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' })) // { outputStyle: 'compressed' }
        .pipe(concat('style.min.css'))
        .pipe(dest('app/css'))
        .pipe(browseSync.stream())
};

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/*.html']).on('change', browseSync.reload)
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;

exports.default = parallel(browsersync, watching)