
// js is a single thread

function task(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

// Driver Code
console.log("Code Execution Started To Run");

let startTime = new Date().getTime();

task(10000000000);

let endTime = new Date().getTime();

let totalTime = (endTime - startTime) / (60 * 1000);
console.log(totalTime);

console.log("Code Execution Ends Here");

