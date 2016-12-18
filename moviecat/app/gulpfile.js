/*
* @Author: huoqishi
* @Date:   2016-07-30 16:57:47
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-30 17:09:25
*/

'use strict';
var gulp = require('gulp');

// concat合并
var concat = require('gulp-concat');

// uglify压缩

var uglify = require('gulp-uglify');

// 新建任务


gulp.task('script',function(){
    // **表示任意文件夹。
    gulp.src(['./**/*.js','!./node_modules/**/*.js','!./assets/**/*.js','!./gulpfile.js'])
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist'))
});