
// print pattern 
function pattern1(numberOfRow) {
    for (let i = 0; i <= numberOfRow; i++) {
        let col = "";
        for (let j = 0; j <= i; j++) {
            col = col + "*";
        }
        console.log(col);
    }
}
// driver code
pattern1(10);



function summAll(start, end) {
    let sum = start;
    for (start += 1; start <= end; start++) {
        console.log(`${sum} + ${start} = ${sum = sum + start}`);

    }
}

// driver code
summAll(2, 4);


function sumStartEnd(startIndex, endIndex) {
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += i;
    }
    console.log("Ans For Verification: ", sum);

}

// driver code
sumStartEnd(231, 456);