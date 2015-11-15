'use-strict'

const gulp = require("gulp");
const webpack = require("webpack-stream");
const config = require('./webpack.config.js');

gulp.task("pack", function(){
    return gulp.src("./src/main.js")
        .pipe(webpack(config))
        .pipe(gulp.dest('dist/'));
});
