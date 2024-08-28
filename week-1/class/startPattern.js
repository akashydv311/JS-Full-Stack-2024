
// print pattern 
function pattern1() {
    for (let i = 0; i <= 4; i++) {
        let col = "";
        for (let j = 0; j <= i; j++) {
            col = col + "* ";
        }
        console.log(col);
    }
}
// driver code
pattern1();



function summAll(start, end) {
    let sum = start;
    for (start += 1; start <= end; start++) {
        console.log(`${sum} + ${start} = ${sum = sum + start}`);

    }
}

summAll(1, 5);