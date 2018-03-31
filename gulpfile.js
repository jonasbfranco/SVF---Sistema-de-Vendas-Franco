var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


//task para o sass
gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


//task para o watch
gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
});

//task para o default
gulp.task('default', ['sass', 'watch']);



/*
// task para o sass COMPRESSED
gulp.task('sass', function () {
 return gulp.src('./sass/*.sass')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});
*/



//task para o default
//gulp.task('default', function(){
	//console.log('Ola coders');
//});