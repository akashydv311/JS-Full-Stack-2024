
/*
 JS is a sync programming lang

 By doing async programming we can switch the same thread further in the code
 Link same thred age badh jayea jab asynch code hoga or thread baar baar akar dekhege kya kaam ho chuka hai { Http request, API calls , SetTimeout, async await} 

 Eska matlab ye nii hai ki js multithreaded ho gayi hai JS abhi bii single thred he hai but vo sirf wait nii kr rahi hai task pura hone tak ka.

*/

function firstLoop(n) {
    let str = "JavaScript";
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

function secondLoop(n) {
    let str = "C++";
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

// Driver Code
firstLoop(5);
secondLoop(5);

console.log("************************");


// setInterval(() => {
//     console.log("Hello");
// }, 2 * 1000)


setTimeout(() => {
    let n = 5;
    let str = "JavaScript";
    for (let i = 0; i < n; i++) {
        console.log(str);
        setTimeout(() => { }, 1000 / 2);
    }
}, 1000);

setTimeout(() => {
    let n = 5;
    let str = "C++";
    for (let i = 0; i < n; i++) {
        console.log(str);
        setTimeout(() => { }, 1000 / 3);
    }

}, 1000)
