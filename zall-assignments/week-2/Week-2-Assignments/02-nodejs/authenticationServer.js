/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express")
const PORT = 3000;
const app = express();

const jwt = require('jsonwebtoken')
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

// middelware for exptracting body
app.use(express.json())

let users = [];
let ID = 100;

/*
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup
*/
function signup(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;

  // console.log(username, password, firstname, lastname);

  // if user alredy present
  let userPresent = false;
  for (let i = 0; i < users.length; i++) {
    if (String(username) === String(users[i].username)) {
      userPresent = true;
      break;
    }
  }
  if (userPresent) {
    res.status(400).send("Bad Request")
  } else {
    newUser = {
      id: ++ID,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname
    }
    users.push(newUser)
    // console.log(users);
    res.status(201).send("Signup successful")
  }
}
app.post('/signup', signup)



/*
  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login
*/
function signin(req, res) {

  const JWT_SECRET = 'lakjsdfuwierjkakjdff';

  let username = req.body.username;
  let password = req.body.password;

  let findUser = false;
  //usename is present
  for (let i = 0; i < users.length; i++) {
    if (String(username) === String(users[i].username) && String(password) === String(users[i].password)) {
      findUser = users[i];
      break;
    }
  }

  if (findUser) {
    const token = jwt.sign({ id: findUser.id, username: findUser.username }, JWT_SECRET, { expiresIn: '1h' })

    res.status(200).json({
      message: "Login successfull",
      token: token
    })

  } else {
    res.status(401).send("credentials are invalid.")
  }
}
app.post('/login', signin)

app.get('*', (req, res) => {
  return res.status(404).send("Bed Request")
})

// app.listen(PORT, () => {
//   console.log(`Listning on port ${PORT}`);
// })

module.exports = app;
