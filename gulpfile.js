const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/css'));
}

function images() {
    return gulp.src('./src/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/public/imagens'));
}

exports.default = gulp.parallel(styles, images);
exports.build = gulp.parallel(styles, images);