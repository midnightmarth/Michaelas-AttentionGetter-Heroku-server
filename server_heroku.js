const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressWs = require("express-ws")(app);
// const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors);

let holder;

app.post("/api/button_press", (req, res) => {
  holder = req.body;
  console.log(holder);
  res.end();
});

app.get("/api/_healthcheck", (req, res) => {
  res.send({ status: "Ok" });
});

app.ws("/api/ws", (req, res, next) => {
  if (holder) {
    ws.send(holder);
    holder = undefined;
  }
  app.on("message", () => {
    console.log("All arguments when ws hit: \n", ...arguments);
  });
  app.on("close", () => {
    console.log("Closed connection");
  });
  ws.send({ status: "Hello There!" });
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
