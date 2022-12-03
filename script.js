"use strict";
// 103, 104, 105 - 1h
// Destructuring Arrays = a way of unpacking values from an array or an object into separate variables.
//                      = is to break a complex data structure down into a smaller data structure like a variable

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// equals to the array from which they should be taken.
// const [i, , j] = nested;
// console.log(i, j);

//Destructuring inside destructiring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// THE SPREAD OPERATOR (...) = to basically expand an array into all its elements.
//                           = unpacking all the array elements at one.

const array = [7, 8, 9];
const badNewArr = [1, 2, array[0], array[1], array[2]];
console.log(badNewArr);

// VS

const newArr = [1, 2, ...array];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // WE ARE WRITING A NEW ARRAY but simply based on expanding this array and then adding another element to it.
console.log(newMenu);

// SHALLOW COPIES OF ARRAYS and MERGE TWO ARRAYS TOGETHER.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays together or more
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = "Emas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// IMPORTANT! - MULTIPLE VALUES SEPARATED BY A COMMA ARE USUALLY ONLY EXPECTED WHEN WE PASS ARGUMENTS INTO A FUNCTION.
// Real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// or

restaurant.orderPasta(...ingredients);

// Objects
// this will basically copy all the properties of the restaurant INTO THIS NEW OBJECT.
const newRestaurant = { foundedIn: 1988, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);
