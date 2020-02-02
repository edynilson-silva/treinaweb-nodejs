var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("minha_task", function(){
  return gulp.src(['./app.js'])
  .pipe(uglify())
  .pipe(gulp.dest('./dist'))
})

/* Escutar mudanças / Caso esqueça minhas tasks, posso lembrar as criadas com 'gulp --tasks' */

gulp.task("observar", function(){
  gulp.watch(['./app.js'], ['minha_task']);
})