const chokidar = require("chokidar");
const sass = require("sass");
const fs = require("node:fs");

console.log("working directory: ", process.cwd());

const watcher = chokidar.watch("./src/", {
  persistent: true,
  cwd: __dirname,
  ignored: (file, _stats) => _stats?.isFile() && !file.endsWith(".scss"),
});

watcher.on("ready", () => {
  const watchedPaths = watcher.getWatched();
  console.log("watched paths: ", watchedPaths);
  console.log("Watcher is ready");
});

watcher
  .on("add", (path) => console.log(`[add] file ${path} was added.`))
  .on("change", (path) => {
    console.log(`[change] file ${path} was modified.`);
    try {
      const result = sass.compile("./src/style.scss");
      fs.writeFile("./dst/appletini.css", result.css, (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("file ./dst/appletini.css written");
        }
      });
    } catch (error) {
      console.error("\nERROR: \n", error.message, "\n");
    }
  })
  .on("unlink", (path) => console.log(`[removed] file ${path} was removed.`))
  .on("error", (error) => console.error(`[ERROR] ${error}`));
