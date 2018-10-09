import gulp from 'gulp';
import mocha from 'gulp-mocha';

import './build';
import './sass';

export const test = () => {
  return gulp.src('build/test/index.test.js')
    .pipe(mocha());
};

gulp.task('test', gulp.series('sass', test));
