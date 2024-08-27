
// DOM Manipulation

// 1. getElementById();

const title = document.getElementById('head');
console.log(title);

// 2. getElementByClassName();

const heading = document.getElementsByClassName("content");
console.log(heading);


// 3. getElementByTagName();

const tagname = document.getElementsByTagName("ul");
console.log(tagname);


// 4. querySelector();

const myiteam = document.querySelector('#head');
console.log(myiteam);
// NotWorking

// 5. querySelectorAll();

const myiteams = document.querySelectorAll('div');
console.log(myiteams);