import path from 'path';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';

import {distGlob, srcDir, distDir, distSassGlob} from './globs';

export const dist = () => {
  return gulp.src(distGlob)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(gulp.dest(distDir));
};

export const distSass = () => {
  return gulp.src(distSassGlob, {
    base: path.join(process.cwd(), srcDir),
    since: gulp.lastRun(distSass),
  })
  .pipe(gulp.dest(distDir));
};

gulp.task('dist', gulp.parallel(dist, distSass));
