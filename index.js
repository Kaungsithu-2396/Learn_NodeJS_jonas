const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
const transformTemplate = require("./modules/transformModule");
const slugify = require("slugify");

//file
//Blocking(Not recommended due to its Sync nature's irresponsiveness in dealing with multiple users)
// const d = new Date(Date.now());
// const dateFormat = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDay()}`;
// const txtOut = `This is what we know about the avacado: ${txtFileResult}.\n Create on ${dateFormat}`;
// fs.writeFileSync("./txt/outputTxt.txt", txtOut);
// console.log("file written");
//nonBlocking (recommended)
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//             console.log(data3);
//             fs.writeFile(
//                 "./txt/newFinal.txt",
//                 `${data2}\n${data3}`,
//                 "utf-8",
//                 (error) => {
//                     console.log("file has been writtens");
//                 }
//             );
//         });
//     });
// });
// console.log("Reading files");

//server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

console.log(slugify("kaung si thu", { lower: true }));
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/overview-teamplate.html`,
    "utf-8"
);
const tempProductCard = fs.readFileSync(
    `${__dirname}/templates/product-card-template.html`,
    "utf-8"
);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/product-template.html`,
    "utf-8"
);
const dataObjectForm = JSON.parse(data);

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    console.log(url.parse(req.url, true));

    //overview page
    if (pathname === "/" || pathname === "/overview") {
        res.writeHead(200, { "Content-type": "text/html" });
        const renderProductCards = dataObjectForm
            .map((el) => {
                return transformTemplate(tempProductCard, el);
            })
            .join("");
        const overviewRender = tempOverview.replace(
            /{%PRODUCT_CARDS%}/g,
            renderProductCards
        );

        res.end(overviewRender);
    }
    //product page
    else if (pathname === "/product") {
        res.writeHead(200, { "Content-type": "text/html" });
        console.log(query.id)
        const currentProduct = dataObjectForm[query.id];
        const productRender = transformTemplate(tempProduct, currentProduct);
        res.end(productRender);
    }
    //api page
    else if (pathname === "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
    } //unknown page
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>unknown page</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server loading");
});
