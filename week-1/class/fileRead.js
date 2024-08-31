
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


