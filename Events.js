const eventEmitter = require("events"); //custom events
//event emitter
const myEmitter = new eventEmitter();

//event listener
myEmitter.on("new Sale", () => {
    console.log("yeah! discount is 10%");
});
myEmitter.on("new Customer", () => {
    console.log("new customer alert");
});
myEmitter.on("new Sale", (stock) => {
    console.log(`There are ${stock} items`);
});

myEmitter.emit("new Sale", 9); //emit events

///////////////////////////////////////

//built in events
const http = require("http");
const server = http.createServer();
server.on("request", (req, resp) => {
    console.log("request event triggered");
    resp.end("Wating request");
});
server.on("close", () => {
    console.log("server closed");
});
server.listen(8000, "localhost", () => console.log("server started"));
