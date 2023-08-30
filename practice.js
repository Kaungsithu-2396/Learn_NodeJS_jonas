const fs = require("fs");
const http = require("http");

//data
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();
const fileInputData = `\n this file is written in ${year}.${month + 1}.${day} `;

//blocking IO
// const fileResult = fs.readFileSync("./txt/newFile.txt", "utf-8");
// const fileWrite = fs.writeFileSync(
//     "./txt/newFileTemplate.txt",
//     fileInputData + fileResult
// );
// console.log("file has been written");

//non-blocking IO
// fs.readFile("./txt/start.txt", "utf-8", (error, data) => {
//     fs.readFile(`./txt/${data}.txt`, "utf-8", (error, data2) => {
//         console.log(data2);
//     });
// });
// fs.readFile("./txt/start.txt", "utf-8", (error, data) => {
//     fs.readFile(`./txt/${data}.txt`, "utf-8", (error, data2) => {
//         console.log(data2);
//     });
// });
// fs.writeFile("./txt/superNode.txt", "si thu how's your doing", (error) => {
//     console.log("file has been written");
// });
// console.log("reading file...");

//server
// const server = http.createServer((req, resp) => {
//     resp.end("Welcome from practice web server");
// });
// server.listen(3000, "127.0.1", () => {
//     console.log("server started");
// });

// setTimeout(() => {
//     console.log("set timeout 1");

//     Promise.resolve().then(() => console.log("proimise 1"));
//     process.nextTick(() => console.log("nex tick"));
// });
// setTimeout(() => {
//     console.log("set time out 2");
// });

fs.readFile("./txt/input.txt", () => {
    setTimeout(() => {
        console.log("set time out from file read process");
    });
});
