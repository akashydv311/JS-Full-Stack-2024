
// DOM Manipulation

// 1. document.getElementById()

let title = document.getElementById('heading');
console.log(title);


// // 2. document.getElementsByClassName()

let smallHeading = document.getElementsByClassName('small-heading');
console.log(smallHeading);


// // 3. document.getElementsByTagName()

let divtag = document.getElementsByTagName('div');
console.log(divtag);


// 4. document.querySelector()

const div01 = document.querySelector('div');
console.log(div01);

const title01 = document.querySelector('#heading');
console.log(title01);

const hadingSmall = document.querySelector('.small-heading');
console.log(hadingSmall);



// 5. document.querySelectorAll()

const alldiv = document.querySelectorAll('div');
console.log(alldiv);
