var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect');

gulp.task('imgur', function() {

});

gulp.task('vine', function() {

});

gulp.task('upload', ['imgur', 'vine']);

gulp.task('less', function() {
  gulp.src(['./assets/css/app.less'])
      .pipe(less())
      .pipe(gulp.dest('./assets/css'))
      .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./assets/js/*.js')
      .pipe(connect.reload())
});

gulp.task('server', function() {
  connect.server({
    root: './',
    port: 8080,
    livereload: true
  })
});

gulp.task('default', ['server'], function() {
  gulp.watch('./assets/css/app.less', ['less']);
  gulp.watch('./assets/js/*.js', ['js']);
});
