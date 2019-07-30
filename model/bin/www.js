const http=require("http");

const PORT = 8000;
const serverHandle = require("../app");
conser server = http.createServer(serverHandle);
server.listen(PORT);