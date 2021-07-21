const express = require("express");
const app = express();

// I don't really use express that often, feel free to change it so it'll be easier to read and manage.

app.get("/song/:name", (req, res) => {
  const data = require(`./data/songs/${req.params.name}`);
  if(!data) return res.send(404);
  return res.json(data);
})

app.get("/anime/:group/episodes/:season-:episode", (req, res) => {
  const data = require(`./data/episodes/${req.params.group}-s${req.params.season}`);
  if(!data || !data[req.params.episode-1]) res.send(404);
  return res.json(data[req.params.episode-1]);
})

app.listen(process.env.PORT);