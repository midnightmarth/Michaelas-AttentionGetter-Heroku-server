const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/api/_healthcheck", (req, res) => {
  res.send({ status: "Ok" });
});

io.on("connection", socket => {
  console.log("Connection was made");
  socket.on("button_press", message => {
    console.log("Button press was activated");
    switch (message.status) {
      case "on":
        io.emit("turn on", message.color);
        break;
      case "strobe":
        io.emit("strobe", message.color || null);
        break;
      case "off":
        io.emit("turn off");
        break;
    }
  });
});

http.listen(process.env.PORT || 8080, function() {
  console.log(`App now running on port ${process.env.PORT}`);
});
