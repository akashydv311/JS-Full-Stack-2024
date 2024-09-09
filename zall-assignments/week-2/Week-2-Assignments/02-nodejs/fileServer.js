/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

/*
 1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
*/
function getAllFiles(req, res) {
  const directoryPath = path.join(__dirname + '/files')
  // console.log(directoryPath);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send("Error!" + err)
    } else {
      let fileNames = []
      // Listing all files in the directory
      files.forEach(file => {
        fileNames.push(file)
        // console.log(file);
      });
      res.status(200).send(fileNames)
    }
  })
}
app.get('/files', getAllFiles)




/*
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
*/
function getFileContant01(req, res) {
  const filename = req.params.filename;
  const directoryPath = path.join(__dirname, 'files');

  // Read the directory contents
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send("Error reading directory");
    }

    // Check if the file exists in the directory
    const fileExists = files.includes(filename);

    if (fileExists) {
      // Construct the full file path
      const filepath = path.join(directoryPath, filename);

      // Read the file contents
      fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
          return res.status(404).send("File not found");
        }
        // Send the file content
        return res.status(200).send(data)
      });
    } else {
      // If the file does not exist, send a 404 response
      return res.status(404).send("File not found");
    }
  });
}

function getFileContant(req, res) {
  let filename = req.params.filename;
  // check all files
  const directoryPath = path.join(__dirname + '/files')

  fs.readdir(directoryPath, (err, files) => {

    if (err) {
      res.status(404).send("Error!")
    } else {
      files.forEach(file => {

        if (String(file) === String(filename)) {
          let filepath = path.join(directoryPath, filename)
          console.log(filepath);
          fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
              console.log("Error!", err);
              res.status(404).send({
                filename: filename,
                message: "Error! Not Found."
              })
            } else {
              // console.log(data);
              res.status(200).send({
                filename: filename,
                contant: data
              })
            }
          })
        } else {
          res.status(404).send("File not found")
        }

      })

    }
  })
}
app.get('/files/:filename', getFileContant01)



app.get('/*', (req, res) => {
  res.status(404).send("Route not found")
})

// app.listen(3000, () => {
//   console.log("Listning on port 3000");
// })

module.exports = app;
