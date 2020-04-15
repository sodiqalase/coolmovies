const gulp = require('gulp');
const gulpSass = require('gulp-sass');


gulp.task('sass', function(){
  return gulp.src('./src/*.sass')
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(gulp.dest('./src/'));
});

gulp.task('default', function(){
  gulp.watch('./src/*.sass', gulp.series('sass'));
})