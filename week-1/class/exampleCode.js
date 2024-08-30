
// febonassi series
// sum of first 2 digit [0,1,1,2,3,5,8,13,21....]

let febonassi = function (endNumber) {
    let prev = 0, curr = 1, next;
    let febArr = [prev, curr];

    for (let i = 0; i < endNumber; i++) {
        next = prev + curr;
        febArr.push(next);
        prev = curr;
        curr = next;
    }
    console.log(febArr);
}

// Driver Code
febonassi(10);



