const event = document.getElementById("event");
const para = document.getElementById("para");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  para.classList.add("changeText");
// para.classList.add("styleText");
para.style.backgroundColor=("blue");
para.style.Color=("white");

});

