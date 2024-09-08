


function logResponceBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFun(result) {
    // console.log(result.status);
    result.json().then(logResponceBody)
}

var secObj = {
    method: "GET"
}

fetch('http://localhost:3001/handelsum?counter=100', secObj).then(callbackFun)