
// normal function
function greet(name, msg) {
    return msg + name + "!";
}

// anynomous function
let add = function (num1, num2) {
    return num1 + num2;
}

// arrow function
let result = (add) => {
    let i = 1;
    let resultOfN = 0;
    /*Sum of n natural numbers*/
    while (true) {
        if (i > add) {
            return resultOfN;
        }
        i++;
        // console.log(i);
        resultOfN += i;
    }
}

// Driver Code

let greetResult = greet("Akash", "Good Morning!");
console.log(greetResult);

let ans = add(2, 5);
console.log("Sum of number is: ", ans);

let naturalSum = result(ans);
console.log("Sum of natural number: ", naturalSum);




