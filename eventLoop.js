const fs = require("fs");

// function someAsyncOperation(callback) {
//     // Assume this takes 95ms to complete
//     fs.readFile("/path/to/file", callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//     const delay = Date.now() - timeoutScheduled;

//     console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//     // const startCallback = Date.now();
//     // const comparison = Date.now() - startCallback < 10;

//     // do something that will take 10ms...
//     console.log("nice");
// });
// const startFuncTime = Date.now();

// function someAsyncOperation(callback) {
//     // Assume this takes 95ms to complete
//     fs.readFile("/path/to/file", callback);
// }
// someAsyncOperation(() => {
//     const startCallback = Date.now();

//     // do something that will take 10ms...
//     while (Date.now() - startCallback < 10) {
//         // do nothing
//         console.log("current time", Date.now());
//         console.log("startCallback", startCallback);
//     }
// });

fs.readFile("./specifipath", () => {
    setTimeout(() => {
        console.log("callback one");
    });
    setImmediate(()=>{
        console.log('set immediate');
        
    })
});
console.log("_______");

setTimeout(() => {
    console.log("time out ");
}, 0);
setImmediate(() => {
    console.log("set immediate");
});
