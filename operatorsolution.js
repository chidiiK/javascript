function compareDrive(event) {
  event.preventDefault();

  const age = 18;
  var userAge = parseInt(document.getElementById("agegrade").value);

  if (userAge >= age) {
    document.getElementById("result").innerHTML = "you can drive";
  } else if (userAge < age) {
    let gap = age - userAge;

    document.getElementById(
      "result"
    ).innerHTML = `you have ${gap} years left, before you can drive`;
  }
}

function compareAge(event) {
  event.preventDefault();

  let myAge = parseInt(document.getElementById("user1Age").value);
  let yourAge = parseInt(document.getElementById("user2Age").value);

  if (myAge > yourAge) {
    let ageDiff = myAge - yourAge;
    document.getElementById(
      "age"
    ).innerHTML = `you are ${ageDiff} younger than me`;
  } else if (myAge < yourAge) {
    let ageDiff = yourAge - myAge;

    document.getElementById(
      "age"
    ).innerHTML = `you are ${ageDiff} older than me`;
  } else {
    document.getElementById("age").innerHTML = "we are age mates";
  }
}

function compareNum(event) {
  event.preventDefault();

  let numA = 4;
  let numB = 3;

 if(numA > numB){
    console.log(`${numA} is greater than ${numB}`).innerHTML
 }
}
