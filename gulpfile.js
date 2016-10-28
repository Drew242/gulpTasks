var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    babel  = require('gulp-babel');

gulp.task('default', function() {
  gulp.src('js/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
});
