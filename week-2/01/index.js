
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


function middelware1(req, res, next) {
    var counter = req.headers.counter;
    console.log("From middelware-1 ", counter);
    next();
}

app.use(middelware1);

function firstRequest(req, res) {
    res.send('Hello World!')
}
app.get('/', firstRequest)


function addNum(num1, num2) {
    return num1 + num2;
}

app.get('/add', (req, res) => {
    var num01 = Number(req.query.num1);
    // console.log(num01);
    var num02 = Number(req.query.num2);
    var answer = "Sum is: " + Number(addNum(num01, num02));
    res.send(answer)
})

app.get('/inputsum', (req, res) => {
    var counter = Number(req.query.counter);
    var calculateSum = sum(counter);
    var answer = "Anwer is: " + calculateSum;
    res.send(answer)
})


function sum(counter) {
    let sum = 0;
    for (let i = 0; i <= Number(counter); i++) {
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

function handelSum(req, res) {
    // var counter = parseInt(req.query.counter)
    var counter = (req.headers.counter);
    console.log(typeof counter);

    if (isNaN(counter) || counter < 0) {
        res.send(400).json({ error: 'invalid counter!' })
    }

    var answer = sum(counter)
    // console.log(answer);
    res.send("Ans is: " + answer)
}

app.post('/handelsum', handelSum)



// read file 

function fileContand(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// async function readMyFile(req, res) {
//     let contant = await fs.readFile('a.txt', 'utf-8', fileContand)
//     setTimeout(() => {
//         let msg = "File Contant - " + contant
//         res.send(msg)
//     }, 3000)

// }
app.get('/readfile', (req, res) => {
    let contant = fs.readFile('a.txt', 'utf-8', fileContand)
    let msg = "File Contant - " + contant
    res.send(msg)
})


// app.get('/:input', (req, res) => {
//     res.send("Look at rounts!");
// })


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
