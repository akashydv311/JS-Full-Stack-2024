
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num1 > num2) {
        return num1 / num2;
    } else {
        return num2 / num1;
    }
}

function doCalculation(num1, num2, arthmaticFunction) {
    return arthmaticFunction(num1, num2);
}

// Driver Code
const ans = doCalculation(2, 5, div);
console.log(ans);
