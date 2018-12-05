'use strict';
 
// Подключение плагинов
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    copy = require('gulp-contrib-copy'),
    concat = require('gulp-concat');
 
// Пути для сборки
var path = {
    build: {
    	html: 'build/',
    	css: 'build/styles/'
    },
    src: {
    	copy_html: 'src/templates/index.html',
    	css: 'src/styles/*.css'
    },
    watch: {},
    clean: ['build','src/styles/main.css']
};
 
// Очистка папок и файлов
gulp.task('clean', function() {
    return gulp.src(path.clean, {read: false})
        .pipe(clean());
});

gulp.task('html:copy', function() {
    gulp.src(path.src.copy_html)
        .pipe(copy())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css:concat', function() {
    return gulp.src(path.src.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path.build.css));
}); 

gulp.task('default', [
    'clean',
    'html:copy',
    'css:concat'
]);