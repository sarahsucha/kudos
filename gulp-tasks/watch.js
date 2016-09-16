const gulp = require('gulp');

const paths = {
 webpack: ['public/js/**/*.*'],
 browser_tests: ['src/js/**/*', 'tests/**/*.*'],
};

// When you write 'gulp watch' it runs this task.
// By default it calls the 'webpack' and 'browser_tests' tasks.
// Then it watches for changes from the 'paths' variable and if any file inside
// those folders changes, it calls either webpack or browser_tests task again.
gulp.task('watch', ['webpack', 'browser_tests'], () => {
 gulp.watch(paths.webpack, ['webpack']);
 gulp.watch(paths.browser_tests, ['browser_tests']);
});
