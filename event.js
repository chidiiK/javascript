// const event = document.getElementById("event");
// const para = document.getElementById("para");
// const toggleBtn = document.getElementById("toggleBtn");

// toggleBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   para.classList.add("changeText");
//   para.textContent=("i am a new line of text added using javascript dom manipulation");
// // para.classList.add("styleText");

// // para.innerHTML=
// para.style.backgroundColor=("blue");
// para.style.Color=("white");

// });


// LEVEL 1 GET WITH TAG


const para = document.querySelector('p');
document.querySelector('p').textContent= "first paragraph";
// console.log(firstParagraph);

// LEVEL 2 GET WITH ID

const first = document.querySelector('first-para');
const second = document.querySelector('second-para');
const third = document.querySelector('third-para');


 console.log(first,second,third);

// LEVEL 3 ALL P AS NODELIST

const allP = document.querySelectorAll('p');
console.log(allP);

// LEVEL 4 LOOP

for (let i = 0; i < allP.length; i++) {
  console.log(allP[i].textContent);
}

// LEVEL 5 

for (let i = 0; i < allP.length; i++) {
  if (i === 3) {
    allP[i].textContent = "Fourth Paragraph";
    console.log(allP[i]);
  }
}

// LEVEL 6

for (let i = 0; i < allP.length; i++) {
  allP[0].setAttribute("class", "first-paragraph");
  allP[0].setAttribute("id", "first-para");

  allP[1].className = "second-paragraph";
  allP[1].id = "second-para";

  allP[2].className = "third-paragraph";
  allP[2].setAttribute("id", "third-para");

  allP[3].classList.add("fourth-paragraph");
  allP[3].id = "fourth-para";

  console.log(allPara[i]);
}



