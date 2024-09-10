
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

let todos = [];

function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) return i;
    }
    return -1;
}

function removeAtIndex(arr, index) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get('/todos', (req, res) => {
    res.json(todos);
});

let id = 0;
app.post('/todos', (req, res) => {
    const newTodo = {
        // id: Math.floor(Math.random() * 1000000), // unique random id
        id: ++id,
        title: req.body.title,
        description: req.body.description
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    } else {
        todos = removeAtIndex(todos, todoIndex);
        res.status(200).send();
    }
});

// for all other routes, return 404
app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(PORT, (req, res) => {
    console.log(`Listning at port${PORT}`);
})