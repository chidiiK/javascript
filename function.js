function userDetails() {
  let firstName = "kelvin";
  let lastName = " dike";
  let fullName = firstName + lastName;
  return fullName;
}
console.log(userDetails());


function addNumbers(a , b){

     let decade = parseInt(a) + parseInt(b);
 
 if(parseInt (a) + (b) > 10){
    return `${decade} is greater than a decade`;
 }

 else {

    return `${decade} is less than a decade`;
 }

}

console.log(addNumbers(5, 2));

let numbers = [1,2,3,4,5,6,7,8,9,10];
for(i=0; i<=numbers.length; i++);
console.log(numbers);


let arrayNumbers = [1,2,3,4,5,6,7,8,9,10];
for(let i = arrayNumbers.length; i > 0; i--){
    console.log(i);

}



function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}