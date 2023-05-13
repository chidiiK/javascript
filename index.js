// const male=9;
// const female =2;
// const isPresentAll=true;

// const noOfFM={
//     male,
//     female,
// };

// const colorsWorn=[ "black", "grey", "pink"]; 

// let add = male + female;
// let subtract = male - female ;
// let division = male / female ;
// let mode = male % female;

// console.log(mode, division, subtract, add);

// console.log(add++);
// console.log(subtract--);
// console.log(subtract--);


// let mult = 2*4;
// let mult2 = 2**4;

// console.log(mult, mult2);

function modulus(event){
    
    event.preventDefault();

    let valueOne = document.getElementById("valueOne").value;
    let valueTwo = document.getElementById("valueTwo").value;

    let result = Number(valueOne) + Number(valueTwo);


    console.log(result);


}

function addition(event){

    event.preventDefault();

let valueOne = document.getElementById("valueOne").value;

let valueTwo = document.getElementById("valueTwo").value;

let result = valueOne ** valueTwo;

console.log(result);

}

// function modulus(event){

//     event.preventDefault();

//     let valueOne = document.getElementById("valueOne").value;
//     let valueTwo = document.getElementById("valueTwo").value;

//     let result = Number(valueOne) + Number(valueTwo);


//     console.log(result);


// }


// function add(addition){
//     addition.preventDefault();

//     let valueOne = parseFloat(document.getElementById("valueOne").value);
//     let valueTwo = parseFloat(document.getElementById("valueTwo").value);

// let result = valueOne + valueTwo;    

//     console.log(result);
// }
