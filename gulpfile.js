const { src, dest } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
// const concat = require('gulp-concat');

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' })) // { outputStyle: 'compressed' }
        // .pipe(concat('style.min.css'))
        .pipe(dest('app/css'));
};

exports.styles = styles;