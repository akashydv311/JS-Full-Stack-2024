
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3001;

// function middelware1(req, res, next) {
//     var counter = req.headers.counter;
//     console.log("From middelware-1 ", counter);
//     next();
// }

// mideelware 
app.use(bodyParser.json())

function givePage(req, res) {

    res.sendFile(__dirname + '/index.html')

    // var obj = {
    //     html: `
    //     <html lang="en">
    //     <head>
    //         <title>Hello From Page</title>
    //     </head>
    //     <body>
    //         <h1>Hi There</h1>
    //     </body>
    //     </html>
    //     `
    // }
    // res.send(obj.html)
}

app.get('/', givePage)



function calculateSum(counter) {
    let sum = 0;
    for (let i = 1; i <= counter; i++) {
        sum += i;
    }
    return sum;
}

function calculateMulti(counter) {
    let multi = 1;
    for (let i = 1; i <= counter; i++) {
        multi *= i;
    }
    return multi;
}

function handelSumMulti(req, res) {

    var counter = req.body.counter;

    var calculatedSum = calculateSum(counter)
    var calcuatedMulti = calculateMulti(counter)

    var answerObject = {
        sum: calculatedSum,
        multi: calcuatedMulti
    }
    res.status(200).send(answerObject)
}
app.post('/handelsummulti', handelSumMulti)



function handelSum(req, res) {

    var counter = req.query.counter;

    var calculatedSum = calculateSum(counter)

    var answerObject = {
        sum: calculatedSum,
    }
    res.status(200).send(answerObject)
}
app.get('/handelsum', handelSum)


app.listen(port, () => {
    console.log(`listning on port ${port}`);
})