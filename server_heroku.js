const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressWs = require("express-ws")(app);
// const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors);

let holder;

app.get("/api/button_press", (req, res) => {
  console.log(req.body);
  if (holder) {
    holder.send({ status: "on" });
  } else {
    res.send({ status: `websocket not available: ${holder}` });
  }

  res.end();
});

app.get("/api/_healthcheck", (req, res) => {
  res.send({ status: "Ok" });
});

app.ws("/api/ws", (req, res, next) => {
  holder = ws;
  app.on("message", () => {
    console.log("All arguments when ws hit: \n", ...arguments);
  });
  app.on("close", () => {
    console.log("Closed connection");
  });
  app.on("connect", () => {
    console.log("Something Connected!");
  });
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
