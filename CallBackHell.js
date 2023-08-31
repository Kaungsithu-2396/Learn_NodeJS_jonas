const fs = require("fs");
const superagent = require("superagent");
// fs.readFile("./txt/dog.txt", "utf-8", (err, data) => {
//     if (err) return;
//     superagent
//         .get(`https://dog.ceo/api/${data}/image/random`)
//         .end((err, res) => {
//             if (err) return console.log(err.message);

//             fs.writeFile("dog-collectoin.txt", res.body.message, () => {
//                 console.log("file has been saved");
//             });
//         });
// });

//fix with promise
const readFileInPromise = (fileLocation) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileLocation, "utf-8", (err, data) => {
            if (err) {
                return reject("We cannot resolve operatoin");
            }
            resolve(data);
        });
    });
};
const writeFileInPromise = (newFile, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(newFile, data, (err) => {
            if (err) reject("Write file failed");
            resolve("HERE WE GO! ✅");
        });
    });
};

// readFileInPromise(`${__dirname}/txt/dog.txt`)
//     .then((data) => {
//         console.log(data);
//         return superagent
//             .get(`https://dog.ceo/api/${data}/image/random`)
//             .then((res) => {
//                 writeFileInPromise("dog-collection.txt", res.body.message)
//                     .then((data) => console.log(data))
//                     .catch((err) => console.log(err));
//             })
//             .catch((err) => console.log(err.message));
//     })
//     .catch((err) => console.log(err));

//more cleaner version
readFileInPromise(`${__dirname}/txt/dog.txt`)
    .then((data) => {
        console.log(data);
        return superagent(`https://dog.ceo/api/${data}/image/random`);
    })
    .then((res) => {
        console.log(res.body.message);
        return writeFileInPromise("dog-collection.txt", res.body.message);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
