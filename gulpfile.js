//////////////////////////////////////////////////////////////////////////////////////////////
// Required files
//////////////////////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var plumber = require('gulp-plumber');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
  autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

var browserSync = require('browser-sync');
var reload = browserSync.reload
var gulpConcat = require('gulp-concat');




//////////////////////////////////////////////////////////////////////////////////////////////
// Script task
//////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('scripts', function(){
  //source all JS files contained in app/js/.. folders
  //More info glob patterns
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
    .pipe(gulpConcat('all.js'))
    .pipe(gulp.dest('app/dist/js/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js/'))
    .pipe(reload({stream:true}));
});

gulp.task('less', function(){
  gulp.src('app/less/**/*.less')
    //plumber helps to mantain working gulp even if occur any error on LESS declarations,
    //Seems only works for SASS because LESS have already implemeted this feature
    //.pipe(plumber())

    .pipe(less({
      plugins: [autoprefix]
    }))

    .pipe(concat('allmin.css'))

    //Minify all less
    /*.pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })
    )*/

    .pipe(gulp.dest('app/dist/css/'))
    .pipe(reload({stream:true}));
});

//////////////////////////////////////////////////////////////////////////////////////////////
// Script task
//////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/**/*.html', ['html']);
});

//////////////////////////////////////////////////////////////////////////////////////////////
// HTML task
//////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('html', function(){
  gulp.src('app/**/*.html')
  .pipe(reload({stream:true}));
});


//////////////////////////////////////////////////////////////////////////////////////////////
// Browser sync task
//////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: './app/'
    }
  })
});

//////////////////////////////////////////////////////////////////////////////////////////////
// Default task
//////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['scripts','less','html','browser-sync','watch']);