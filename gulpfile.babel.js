import gulp from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import eslint from "gulp-eslint";
// import concat from "gulp-concat";
import nodemon from "gulp-nodemon";

gulp.task("compile", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(done) {
  nodemon({
    script: "./dist/index.js",
    ext: "js",
    tasks: ["compile"],
    watch: "./src/",
    done: done
  });
});
