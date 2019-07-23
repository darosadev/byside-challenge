var gulp = require('gulp');
var sass = require('gulp-sass');
const { watch } = require('gulp');

//task para o sass
gulp.task('sass', function () {
	return gulp.src('src/main.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
});
