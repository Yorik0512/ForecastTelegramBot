import gulp from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";

gulp.task("scripts", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
