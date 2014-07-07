var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('imgur', function() {

});

gulp.task('vine', function() {

});

gulp.task('upload', ['imgur', 'vine']);

gulp.task('less', function() {
  gulp.src('./assets/css/app.less')
      .pipe(less())
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/app.less', ['less']);
});
