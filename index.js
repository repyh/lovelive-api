const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// I don't really use express that often, feel free to change it so it'll be easier to read and manage.

app.set('view engine', 'jade');
app.get("/", (req, res) => {
  res.render("index")
})

app.get("/storage/songs/:file", (req, res) => {
  res.sendFile(`${__dirname}/storage/songs/${req.params.file}`)
})

app.get("/song/:name", (req, res) => {
  const data = require(`./data/songs/${req.params.name}`);
  if(!data) return res.status(404);
  return res.json(data);
})

app.get("/unit/:unit", (req, res) => {
  const data = require(`./data/units/${req.params.unit}`);
  if(!data) res.status(404);
  return res.json(data);
})

app.get("/anime/:anime/episode/:season-:episode", (req, res) => {
  const data = require(`./data/episodes/${req.params.anime}/season-${req.params.season}`);
  if(!data || !data[req.params.episode-1]) res.status(404);
  return res.json(data[req.params.episode-1]);
})

app.listen(process.env.PORT);
