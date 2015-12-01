'use-strict'

const gulp = require("gulp");
const webpack = require("webpack-stream");
const config = require('./webpack.config.js');
const less = require('gulp-less');

gulp.task("pack", function(){
    return gulp.src("./src/main.js")
        .pipe(webpack(config))
        .pipe(gulp.dest('dist/'));
});

gulp.task("less", function(){
    return gulp.src("./src/**/*.less")
        .pipe(less())
        .pipe(gulp.dest("dist/css"))
});
