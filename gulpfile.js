const gulp = require('gulp');
const fs = require('fs');

const babelConfig = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));
require('babel-register')(babelConfig);

require('./gulp-tasks/webpack');
require('./gulp-tasks/watch');

gulp.task('default', ['webpack']);
