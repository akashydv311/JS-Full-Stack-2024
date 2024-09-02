
/*

// dammy synchornous fun
function dammy() {
    console.log("Nothing!");
}

// promises

function promiseBody(resolve) {
    setTimeout(resolve, 1000);
}


function runFunction() {
    let asnwer = new Promise(promiseBody);
    return asnwer;
}

let result = runFunction();
console.log(result);

// setInterval(() => { console.log("Hello") }, 1000);

*/













function goingToBuyPen() {
    console.log("Got the pen");
}

function promiseBody(resolve) {
    setTimeout(resolve, 5000)
}

function goBuyPenFromMarket() {
    let thing = new Promise(promiseBody);
    return thing;
}

let result = goBuyPenFromMarket();
console.log(result);

result.then(goingToBuyPen);








// Using promises

// Main diffrence bitween callbacks and promises

/*

function readFromFile(contant) {
    console.log(contant);
}

fs.readFile('concept/a.txt', readFromFile)

fs.readFile('a.txt').then(readFromFile)

*/