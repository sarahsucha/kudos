const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpMocha = require('gulp-mocha'); // It allows you to run mocha tests via Gulp.
require('jsdom-global')(); // It allows you to use mount() rendering in Enzyme.

const path = {
  browser: ['tests/browser/**/*.js'],
  server_unit: ['tests/server/unit/**/*.js'],
};

function handleError(error) {
  gutil.log(error);
  this.emit('end'); // This will not cancel watch.
}

gulp.task('browser_tests', () => {
  gulp.src(path.browser)
    .pipe(gulpMocha({
      reporter: 'nyan', // It uses the Nyan cat reporter for tests.
    }));
});

gulp.task('server_unit_tests', () => {
  gulp.src(path.server_unit)
    .pipe(gulpMocha({
      reporter: 'nyan',
    }));
});
