const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const cors = require("cors");
const db = require("./db");
const fs = require("fs");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(cors());

// get data
App.get("/api/gallery", (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

//get 1 pic
App.get("/api/drawing/:id", (req, res) => {
  res.json({
    message: "Seems to work!2",
  });
});

// post data
App.post("/api/drawing/:id", (req, res) => {
  res.json({
    message: "Seems to work!2",
  });
});

//delete data
App.delete("/api/drawing/:id", (req, res) => {
  res.json({
    message: "Seems to work!2",
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
