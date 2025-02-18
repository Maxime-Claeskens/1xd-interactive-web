/*
  _   __  __   _   _  _  __ 
 / \ (  _ \(  _ \ / _\ ( \/ )/ __)
/    \ )   / )   //    \ )  / \_ \
\/\/(_\)(_\)\/\/(_/  (_/
*/

/*

*/

// 1 — create an array meals with three of your favorite meals and log it to the console
let meals = ["Chicken and Rice", "Fries", "Boulette"];

// 2 — create an array drinks with three of your favorite drinks and log it to the console
let drinks = ["Cola", "Iced Tea", "Apple Juice"];

// 3 - create a variable lastmeal that stores the last item from the meals array
// hint: use the pop() function - log the result to the console
let lastmeal = meals.pop();
console.log(lastmeal);

// 4 - loop over the meals array and print each meal to the console
for (let i = 0; i < meals.length; i++) {
  console.log(meals[i]);
}

// 5 - add a meal called cereal to the meals array, this time using the push() function, log the variable to the console
meals.push("Cereal");

// 6 - create a variable breakfast and find the position of cereal in the meals array
// hint: use the indexOf() function - log the result to the console
let breakfast = meals.indexOf("Cereal");
console.log(breakfast);

/* CHALLENGE :: TIPJAR */
// 7 - create an array tipjar that will contain all our tips, add the following tips: 1, 5, 2, 2, 1
let tipjar = [1, 5, 2, 2, 1];

// 8 - create a function tip that will add a tip to the tipjar array
// hint: the function should take a parameter amount and add it to the tipjar array via push()
function tip(amount) {
  tipjar.push(amount);
}

// 9 - call the function with a tip amount of 2 and log the tipjar array to the console
tip(2);

// 10 - create a function total that will calculate the total amount of the tipjar array
// hint: use a loop to iterate over the array and add the values together, the function should return the result
// log the total value of the tips to the console

function total() {
  let total = 0;
  for (let i = 0; i < tipjar.length; i++) {
    total += tipjar[i];
  }
  return total;
}
console.log(total());
