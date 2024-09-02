
// whey promises where introduces

/*

function getFunction1() {
    console.log("get function - 1");
}

function getFunction2() {
    console.log("get function - 2");
}

function getFunction3() {
    console.log("get function - 3");
}


setTimeout(getFunction1, 1000);
setTimeout(getFunction2, 2000);
setTimeout(getFunction3, 3000);

*/




// Issuue with the callBack hell
// Callbacks is a soluction of callback hells


setTimeout(function getFunction1() {
    console.log("get function - 1");

    setTimeout(function getFunction2() {
        console.log("get function - 2");

        setTimeout(function getFunction3() {
            console.log("get function - 3");
        }, 6000);

    }, 4000);

}, 2000)


// console.log();
