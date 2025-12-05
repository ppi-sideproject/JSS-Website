document.getElementById("runProject").addEventListener("click", () => {

  console.clear(); 

  console.log("=== PROJECT STARTED ===");


  let fullName = "Chetan";       // string
  let age = 22;                  // number
  let isStudent = true;          // boolean
  let emptyValue = null;         // null
  let notAssigned;               // undefined
  let bigNumber = 1234567890123n; // bigint
  let uniqueId = Symbol("id");   // symbol

  console.log("1. Variables:");
  console.log(fullName, age, isStudent, emptyValue, notAssigned, bigNumber, uniqueId);


  function isEven(num) {
    return num % 2 === 0;
  }

  console.log("\n2. isEven Function:");
  console.log("10 is even:", isEven(10));
  console.log("7 is even:", isEven(7));


  const movies = ["RRR", "KGF", "Inception", "Avatar", "Dhoom"];

  console.log("\n3. Movies Array:");
  console.log("First movie:", movies[0]);
  console.log("Last movie:", movies[movies.length - 1]);


  const car = {
    model: "Honda City",
    year: 2020,
    price: 1200000,
  };

  console.log("\n4. Car Object:");
  console.log(car);


 
  console.log("\n5. Numbers from 1 to 50:");
  for (let i = 1; i <= 50; i++) {
    console.log(i);
  }


  car.color = "Black";
  console.log("\n6. Updated Car Object (with color):");
  console.log(car);


  console.log("=== PROJECT ENDED ===");
});
