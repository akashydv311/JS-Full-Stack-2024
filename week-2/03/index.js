
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


app.post('/handelsum', handelSum)

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

function handelSum(req, res) {

    var counter = req.body.counter;

    var calculatedSum = calculateSum(counter)
    var calcuatedMulti = calculateMulti(counter)

    var answerObject = {
        sum: calculatedSum,
        multi: calcuatedMulti
    }
    res.status(200).send(answerObject)

}


app.listen(port, () => {
    console.log(`listning on port ${port}`);
})