const gulp = require('gulp');

const paths = {
 webpack: ['public/js/**/*.*'],
};

gulp.task('watch', ['webpack'], () => {
 gulp.watch(paths.webpack, ['webpack']);
});
