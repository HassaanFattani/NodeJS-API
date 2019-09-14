const http = require("http");
const app = require("./app");
//const port = process.env.PORT || 3000;
app.set("port", process.env.PORT || 3500);

const server = http.createServer(app);

server.listen(app.get("port"), function() {
  console.log("Server is on port ", app.get("port"));
});
//server.listen(port);
