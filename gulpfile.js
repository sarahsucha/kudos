const gulp = require('gulp');
const fs = require('fs');

// Loads babel configuration file, so React files and latest JS is loaded well.
const babelConfig = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));
require('babel-register')(babelConfig);
require('babel-polyfill');

// Includes all of the gulp tasks we want to use.
require('./gulp-tasks/webpack');
require('./gulp-tasks/watch');
require('./gulp-tasks/mocha');

// Registers the default task (when you type 'gulp' to your terminal)
gulp.task('default', ['webpack']);

// 'gulp test' command will execute browser_tests tasks from the gulp-tasks/mocha file.
gulp.task('test', ['browser_tests']);
