var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("hint", function(){
  gulp.src(["public/js/**/*.js", "!public/js/**/*.min.js"])
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
});
