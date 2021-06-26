console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Reid";
let lastName = "Braswell";
var age = 24;

// Exercise 2
let fullName = `${firstName} ${lastName}`
console.log(`\nMy Name is ${fullName}.`);
document.getElementById("exercise-2").innerText=`My Name is ${fullName}.`;


// Exercise 3
let city = "South Pasadena";
let passtime = "electronics";
let myStory = `\nHello! My name is ${fullName}. I live in ${city}. I enjoy ${passtime} and coding!`
console.log(myStory);
document.getElementById("exercise-3").innerText=`My Story: ${myStory}`;
