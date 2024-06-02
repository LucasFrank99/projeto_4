const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/css'));
}

function images() {
    return gulp.src('./src/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens'));
}

exports.default = gulp.parallel(styles, images);