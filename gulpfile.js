const { watch } = require("gulp");
const browserSync = require("browser-sync").create();

function watcher() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./css/**/*.css").on("change", browserSync.reload);
  watch("./*.html").on("change", browserSync.reload);
  watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.watch = watcher;

//  Desktop\rock star\pre-season_css\hohol
