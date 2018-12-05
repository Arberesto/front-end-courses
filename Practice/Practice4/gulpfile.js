'use strict';
 
// Подключение плагинов
var gulp = require('gulp'),
    clean = require('gulp-clean');
 
// Пути для сборки
var path = {
    build: {},
    src: {},
    watch: {},
    clean: 'build'
};
 
// Очистка папок и файлов
gulp.task('clean', function() {
    return gulp.src(path.clean, {read: false})
        .pipe(clean());
});