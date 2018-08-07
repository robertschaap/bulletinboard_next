const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  mongoose.connect("mongodb://localhost:27017/bulletinboard");
  mongoose.connection.on("error", console.error.bind(console), "MDB Connect Err"); //eslint-disable-line
  mongoose.Promise = global.Promise;

  const Comment = require("./models/comment");

  server.get("/", (req, res) => {
    return app.render(req, res, "/readsomething");
  });

  server.get("/readsomething", (req, res) => {
    // let { offset, sort } = req.query;

    Comment.find()
      // .sort({ createdAt: sort })
      .limit(4)
      // .skip(+offset)
      .then(result => {
        return res.json(result);
      });
  });

  server.post("/writesomething", (req, res) => {

    let { title, body, avatar, name } = req.body;

    Comment.new(title, body, avatar, name)
      .then(result => res.json(result));
    // TODO: wire to database
    // console.log(req, res); //eslint-disable-line
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`); //eslint-disable-line
  });
});
