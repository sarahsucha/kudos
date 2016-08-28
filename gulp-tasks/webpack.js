const gulp = require('gulp');
const webpack = require('webpack-stream');
const config = {
 src: 'public/js/main.js', // Source file for compilation. All of the imported modules it has are compiled as well.
 dest: '.build/js', // This is a folder where the final single file is complied.
};

gulp.task('webpack', function webpackConfig() {
 gulp.src(config.src)
   .pipe(webpack({ // Kind of a copy of your webpack config, it's used by the preprocessor.
     watch: true,
     module: {
       loaders: [ // Webpack enables use of loaders to preprocess files.
         {
           test: /\.js|jsx$/,
           exclude: /node_modules/,
           loader: 'babel-loader', // It uses Babel to transform files to the final output file.
         },
       ],
     },
     output: {
       filename: 'bundle.js', // Name of the final complied file.
     },
   }))
   .pipe(gulp.dest(config.dest))
});
