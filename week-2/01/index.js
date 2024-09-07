
const express = require('express')
const app = express()
const port = 3000

function firstRequest(req, res) {
    res.send('Hello World!')
}
app.get('/', firstRequest)


function sum(counter) {
    let sum = 0;
    for (let i = 0; i < counter; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

function calculateSum(req, res) {
    let result = sum(100);
    const answer = "Sum is: " + result;
    res.send(answer);
}

app.get('/sum', calculateSum)

function started(req, res) {
    console.log(`Example app listening on port ${port}`)

}
app.listen(port, started)





/*

// Last program

const fs = require('fs');

function callBackFun(err, data) {
    if (err) {
        console.log("Error Occured-", err);
    } else {
        console.log(data);
    }
}

fs.readFile('a.txt', 'utf-8', callBackFun);

*/
