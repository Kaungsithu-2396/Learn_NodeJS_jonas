const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const textCollection = ["Kg si thu", "kg kg", "aye aye"];
const personTemplate = fs.readFileSync(
    "./templates/person-template.html",
    "utf-8"
);

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    if (pathname === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        const renderPeopleData = textCollection
            .map((el) => personTemplate.replace("%USERNAME%", el))
            .join("");
        console.log(renderPeopleData);

        res.end("home");
    } else if (pathname === "/product") {
        res.writeHead(200, { "Content-type": "text/html" });
        console.log(query.id);
        const currentEl = textCollection[query.id];

        res.end("nice");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server loading");
});
