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
    ).innerHTML = `you are ${ageDiff} years younger than me`;
  } else if (myAge < yourAge) {
    let ageDiff = yourAge - myAge;

    document.getElementById(
      "age"
    ).innerHTML = `you are ${ageDiff} years older than me`;
  } else {
    document.getElementById("age").innerHTML = "we are age mates";
  }
}

// function compareNum(event) {
//   event.preventDefault();

//   let numA = 4;
//   let numB = 3;

//  if(numA > numB){
//     console.log(`${numA} is greater than ${numB}`).innerHTML

//     return(compareNum);
//  }
// }

function compareEven(event) {
  event.preventDefault();

  let evenNum = 2;
  let userNum = parseInt(document.getElementById("userNum").value);

  if (userNum % evenNum == 0) {
    document.getElementById(
      "evenOdd"
    ).innerHTML = `${userNum} is an even number`;
  } else if (userNum % evenNum !== 0) {
    document.getElementById(
      "evenOdd"
    ).innerHTML = `${userNum} is an odd number`;
  }
}

function studentGrade(event) {
  event.preventDefault();

  let studentScore = parseInt(document.getElementById("grade").value);

  if (studentScore >= 80 && studentScore <= 100) {
    document.getElementById("grades").innerHTML = `${studentScore} is Grade A `;
  } else if (studentScore >= 70 && studentScore <= 79) {
    document.getElementById("grades").innerHTML = `${studentScore} is Grade B `;
  } else if (studentScore >= 60 && studentScore <= 69) {
    document.getElementById("grades").innerHTML = `${studentScore} is Grade C `;
  } else if (studentScore >= 50 && studentScore <= 59) {
    document.getElementById("grades").innerHTML = `${studentScore} is Grade D `;
  } else if (studentScore >= 0 && studentScore <= 49) {
    document.getElementById("grades").innerHTML = ` you got an F `;
  } else {
    document.getElementById("grades").innerHTML =
      "you are above this score grade";
  }
}

function season(event) {
  event.preventDefault();

  let seasons = document.getElementById("season");

  if (
    seasons === "september" ||
    seasons === "october" ||
    seasons === "november"
  )
    return "its autumn";
  document.getElementById("weather").innerHTML = "it is autumn";
}
