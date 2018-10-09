import gulp from 'gulp';

import {srcBuildGlob, allSrcGlob, allBuildGlob, allSassGlob} from './globs';
import {build} from './build';
import {bundle} from './bundle';
import {test} from './test';
import {sass} from './sass';

export const watch = done => {
  gulp.watch(allSrcGlob, build);
  gulp.watch(srcBuildGlob, bundle);
  gulp.watch(allBuildGlob, test);
  gulp.watch(allSassGlob, sass);
  done();
};

gulp.task('watch', watch);
