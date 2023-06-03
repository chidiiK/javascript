// const allTitles = document.getElementsByTagName("");

// console.log(allTitles);
// console.log(allTitles.length);

// for (let i =0;i<allTitles.length; i++){
//     console.log(allTitles[i]);
// }

// const title = document.querySelectorAll("h1");

// title[3].className = "title";
// title[3].id = "fourth-title";

// console.log




// let divElement = document.createElement("div");

// divElement.id = 'plural-code';
// divElement.className = "ikeja";
// divElement.textContent = 'februarycohert';

// document.body.appendChild(divElement);

const heading = document.querySelector("h1");
const para = document.querySelector("p");
const container = document.getElementById("container");


const newDiv = document.createElement("div");
const newSpan = document.createElement("span");

heading.classList.add("bold-text");
heading.classList.add("large-text");

para.classList.add("font-style");

newSpan.textContent =  "feb cohert";
newDiv.appendChild(newSpan);
container.appendChild(newDiv);

// let divElement =
