var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    browserSync = require('browser-sync');

gulp.task('imgur', function() {

});

gulp.task('vine', function() {

});

gulp.task('upload', ['imgur', 'vine']);

gulp.task('less:app', function() {
  gulp.src(['./assets/less/app.less'])
      .pipe(less())
      .pipe(gulp.dest('./assets/css'))
      .pipe(browserSync.reload({ stream: true }));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['./assets/less/app.less'], ['less:app']);

  /* when a lese files is updated but app, recompile app.less */
  gulp.watch(['./assets/less/*.less', '!./assets/less/app.less'], ['less:app']);

  gulp.watch(['./assets/js/*.js', './*.html'], ['reload']);
});
