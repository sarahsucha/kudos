const gulp = require('gulp');
const webpack = require('webpack-stream');
const config = {
 src: 'public/js/main.js',
 dest: '.build/js',
};

gulp.task('webpack', function webpackConfig() {
 gulp.src(config.src)
   .pipe(webpack({ // Kind of a copy of your webpack config, it's used by the preprocessor.
     watch: true,
     module: {
       loaders: [ // webpack enables use of loaders to preprocess files.
         {
           test: /\.js|jsx$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
         },
       ],
     },
     output: {
       filename: 'bundle.js',
     },
   }))
   .pipe(gulp.dest(config.dest))
});
