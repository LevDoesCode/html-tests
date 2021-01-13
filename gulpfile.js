let gulp = require('gulp');
let autoprefixer = require('autoprefixer');

gulp.task
('styles',
 () =>
 {
     gulp.src('style.css')
        .pipe(autoprefixer())
        .pip(gulp.dest('buld'))
 }
)