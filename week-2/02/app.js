
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello, World at / Request!")
})

// define array
let arr = ["TCS", "Infosys", "Wipro", "Congni"];

// show this arrays
app.get('/getarr', (req, res) => {
    if (arr.length === 0) {
        res.status(200).json({
            message: "Array is empty",
            arr: arr
        })
    } else {
        for (let i = 0; i < arr.length; i++) {
            res.write(arr[i] + '\n')
        }
        res.end()
    }

})
/*
we can't send multipal responce through res.send() so we can use alternative

-> Single Response with Multiple Data: Combine all data into an array or object and    send it with res.send() or res.json().

-> Streaming Data: Use res.write() for sending chunks of data over time and res.end() to finalize the response.

-> Async Operations: Use Promise.all() to wait for multiple asynchronous operations and then send the data in a single response.

->Server-Sent Events (SSE): Stream multiple responses over time to the client using the EventSource API.
*/

// add values in array

app.post('/postarr', (req, res) => {
    let compnay = req.query.compnay;
    // console.log("current: " + arr);

    arr.push(compnay)

    // console.log("updated: " + arr);

    res.status(200).json({
        message: "added successfullt",
        arr: arr
    })
})

// update array

app.put('/putarr', (req, res) => {
    let inPlaceOf = req.query.old;
    let reciveValue = req.query.new;
    let counter = 0

    for (counter; counter < arr.length; counter++) {
        if (arr[counter] === inPlaceOf) {
            break
        }
    }
    arr[counter] = reciveValue;
    // console.log("new arr: ", arr);

    res.status(200).json({
        message: "data updated successfully",
        arr: arr
    })
})

// delete array

app.delete('/deletearr', (req, res) => {
    arr = [] // null
    res.status(200).json(
        {
            message: "Array Delete Successfully",
            arr: arr
        }
    )
})

app.listen(port, (req, res) => {
    console.log(`Listning on ${port}`)
})

// all un-defined GET request handler
app.get('*', (req, res) => {
    res.status(404).json({
        error: "GET route not found!"
    })
})

// all un-defined POST request handerler
app.post('/*', (req, res) => {
    res.status(404).json({
        error: "POST route not found!"
    })
})