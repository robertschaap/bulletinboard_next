const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    return app.render(req, res, "/readsomething");
  });

  server.get("/readsomething", (req, res) => {
    // TODO: replace dummy data with db data
    const comments = [
      { title: "A", body: "B", avatar: "bunny", name: "C" }
    ];

    return app.render(req, res, "/readsomething", { comments });
  });

  server.post("/writesomething", (req, res) => {
    // TODO: wire to database
    console.log(req, res); //eslint-disable-line
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`); //eslint-disable-line
  });
});
