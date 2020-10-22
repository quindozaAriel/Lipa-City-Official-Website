var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');

gulp.task('css', function(){
	return gulp.src('gulp/sass/*.scss')
	.pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('assets/css/'));
});

gulp.task('image',()=>
{
 return gulp.src('gulp/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('assets/images'));
});

gulp.task('watch', function(){
	gulp.watch('gulp/sass/*.scss', gulp.series('css'));
});

gulp.task('default',gulp.series('watch'));