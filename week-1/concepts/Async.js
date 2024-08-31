// http://latentflip.com/



// setTimeOut is not give you a gurienty that the code will run in that pertculr time
// Dues: it is a outSide of v8 call WEBAPI so it get the result and wait is even loop


/*

setTimeout(function () {
    console.log("Hello-1");
}, 2000)

setTimeout(function () {
    console.log("Hello-2");
}, 2000)

setTimeout(function () {
    console.log("Hello-3");
}, 2000)

*/







// If js thred busy in somware then even loop have to wait
// setTime out result is waiting in the even loop aea because js thred is busy in the heavy expancice task

/*

taffTask();


setTimeout(function () {
    console.log("Hii");
}, 2000)

function taffTask() {
    let count = 1;
    for (let i = 0; i < 10000000000; i++) {
        count += 1;
    }
    console.log(count);
}


*/










// Synchronous

[23, 34, 45, 56, 67].forEach(function printData(i) {
    console.log(i);
})

// Asynchoronous

function logData(i) {
    console.log(i);
}


