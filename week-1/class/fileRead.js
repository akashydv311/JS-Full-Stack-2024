
// In Nodejs
const fs = require('fs');

function sum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

// pasiing function as argument

function readFromFile(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Number is ", data);
    let num = Number(data.trim());
    let ans = sum(num);
    console.log("Result is: ", ans);
}

const result = fs.readFile("class/input.txt", "utf8", readFromFile);


// Async Function of fileread

setTimeout(() => {
    const data = fs.readFileSync('class/input.txt', 'UTF-8')
    console.log("Read Data From File: ", data);
}, 1000 / 2);

console.log("End's Here");

