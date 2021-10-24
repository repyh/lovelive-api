const express = require("express");
const app = express();
const path = require("path");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * Mounts a folder in the express app.
 * @param {string} url Exposed path.
 * @param {string} localPath Local path relative to the project folder.
 * @param {string[] | undefined} extensions Fallback file extensions.
 */
function serve(url, localPath, extensions) {
  app.use(url, express.static(path.join(__dirname, localPath), {
    dotfiles: "ignore",
    extensions: extensions ?? []
  }));
}

serve("/api/storage", "/storage");
serve("/api/character", "/data/characters", ["json"]);
serve("/api/song", "/data/songs", ["json"]);
serve("/api/unit", "/data/units", ["json"]);
serve("/api/school", "/data/schools", ["json"]);
serve("/api/school", "/data/schools", ["json"]);

app.get("/api/anime/:anime([^./]+)/episode/:season([0-9]+)-:episode([0-9]+)", (req, res, next) => {
  const data = require(`./data/episodes/${req.params.anime}/season-${req.params.season}`);
  if (!data || !data[req.params.episode-1]) return next();
  return res.json(data[req.params.episode-1]);
});

app.get("*", (req, res) => {
  res.status(404).type("txt").send("Not Found");
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
