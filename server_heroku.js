const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressWs = require("express-ws")(app);
// const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors);

app.get("/api/button_press", (req, res) => {
  console.log(req.body);
  app.ws.send({ status: "on" });
  res.end();
});

app.get("/api/_healthcheck", (req, res) => {
  res.send({ status: "Ok" });
});

app.ws("/api/ws", (req, res, next) => {
  app.on("message", () => {
    console.log("All arguments when ws hit: \n", ...arguments);
  });
  app.on("close", () => {
    console.log("Closed connection");
  });
  app.on("connect", () => {
    console.log("Something Connected!");
  });
  console.log("socket", req.testing);
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
