const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const expressWs = require("express-ws")(app);
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

// app.use(function(req, res, next) {
//   console.log("middleware");
//   req.testing = "testing";
//   return next();
// });

app.get("/api/button_press", (req, res) => {
  console.log(req.body);
  res.end();
});

// app.ws("/", (req, res, next) => {
//   app.on("message", () => {
//     console.log("All arguments when ws hit: \n", ...arguments);
//   });
//   app.on("close", () => {
//     console.log("Closed connection");
//   });
//   app.on("connect", () => {
//     console.log("Something Connected!");
//   });
//   console.log("socket", req.testing);
// });

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
// const WebSocket = require("ws");

// const wss = new WebSocket.Server({ port: 1128 });

// wss.on("connection", function connection(ws) {
//   ws.on("message", message => {
//     console.log("received: %s", message);
//   });
// });
