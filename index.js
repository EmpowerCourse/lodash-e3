const _ = require("lodash");

console.log("successfully running");

/*
  ------------------ _.reverse ------------------
  Put the countries in reverse order into a variable called 'countriesReversed'
*/

let countries = ["Vanuatu", "Uganda", "Peru", "Japan", "Poland"];
let countriesReversed = [];

// Lodash implementation
console.log(_.reverse(countries));

// Pure javascript implementation
for (let i = 0; i < countries.length; i++) {
  countriesReversed[i] = countries[countries.length - 1 - i];
}

/*
  ------------------ _.map ------------------
  Make a variable called 'numbersMultipledBy5' with each of the numbers in 'numbers' multiplied by 5
*/

let numbers = [1, 2, 3, 4, 5];
let numbersMultipledBy5 = [];

// Lodash implementation
function iAmNotAnonymous(n) {
  return n * 5;
}
// Same as above, just different syntax
const iAmNotAnonymous_2 = (n) => n * 5;

const numbersMultipliedBy5 = _.map(numbers, iAmNotAnonymous);
console.log(numbersMultipliedBy5);

// Pure javascript implementation
for (let j = 0; j < numbers.length; j++) {
  numbersMultipledBy5[j] = numbers[j] * 5;
}

/*
  ------------------ _.filter ------------------
  Remove all numbers greater than 20 from 'list' and put into a list called 'list2'
*/

let list = [100, -5, 40, 20, 6, 3, 99, 1, 1999];
let list2 = [];

// Lodash implementation
list2 = _.filter(list, (n) => n > 20);
list2_2 = _.reject(list, (n) => n <= 20);
console.log(list2, list2_2);

// Pure javascript implementation
for (let num of list) {
  if (num <= 20) {
    list2.push(num);
  }
}

/*
  ------------------ _.mean ------------------
  Get the mean (average) of test scores
*/

let testScores = [0, 100, 100, 75, 68, 73, 95, 96, 84, 19];
let average = 0;

// Lodash implementation
average = _.mean(testScores);
console.log(average);

// Pure javascript implementation
let sum = 0;
for (let i = 0; i < testScores.length; i++) {
  sum += testScores[i];
}

average = sum / testScores.length;

/*
  ------------------ _.sum ------------------
  Get the sum of the ages
*/

let ages = [4, 86, 45, 53, 18, 24, 99, 12];
let sumOfAges = 0;

// Lodash implementation
sumOfAges = _.sum(ages);
console.log(sumOfAges);

// Pure javascript implementation
for (let i = 0; i < ages.length; i++) {
  sumOfAges += ages[i];
}

/*
  ------------------ _.startsWith ------------------
  Determine if the given string starts with 'ban'
*/

let banana = "banana";
let startsWith = "ban";

// Lodash implementation
const doesItStartWithBan = _.startsWith(banana, startsWith);
console.log(doesItStartWithBan);

// Pure javascript implementation
let doesStartWith = true;
for (let i = 0; i < startsWith.length; i++) {
  if (i >= banana.length) {
    doesStartWith = false;
    break;
  }

  if (startsWith[i] != banana[i]) {
    doesStartWith = false;
    break;
  }
}

/*
  ------------------ _.repeat ------------------
  Repeat the string 'foo' 5 times (and put into the string 'bar')
*/

let foo = "Empower";
let bar = "";

// Lodash implementation
bar = _.repeat(foo, 5);
bar = _.fill(Array(5), foo).join();
console.log(bar);

// Pure javascript implementation
for (let i = 1; i <= 5; i++) {
  bar += foo;
}

const COLORS = {
  PURPLE: "purple",
  BLUE: "blue",
};

// TODO finsih colors
const s2Employees = [
  {
    firstName: "Dane",
    lastName: "Cook",
    favoriteColor: "red",
    favoriteNumbers: [1, 12, 5],
    gender: "male",
  },
  {
    firstName: "Claudia",
    lastName: "Tahbaz",
    favoriteColor: "purple",
    gender: "female",
  },
  {
    firstName: "Jesse",
    favoriteColor: "blue",
    favoriteNumbers: [],
    gender: "male",
  },
  {
    firstName: "Chris",
    lastName: "Jackson",
    favoriteColor: "blue",
    favoriteNumbers: [101],
    gender: "male",
  },
  {
    firstName: "James",
    favoriteColor: "pink",
    favoriteNumbers: [100, 50, 25],
    gender: "female",
  },
  {
    firstName: "David",
    favoriteNumbers: [780, 20],
    gender: "male",
  },
  {
    firstName: "Halie",
    lastName: "Chmura",
    favoriteColor: "gray",
    favoriteNumbers: [-5, 4, 0, 190],
    gender: "female",
  },
  {
    firstName: "John",
    lastName: "Crowley",
    favoriteColor: "blue",
    gender: "male",
  },
  {
    firstName: "Ali",
    lastName: "Tahbaz",
    favoriteColor: "orange",
    favoriteNumbers: [5, 10],
    gender: "male",
  },
  {
    firstName: "Sacha",
    lastName: "Gordon",
    favoriteColor: COLORS.GREEN,
    favoriteNumbers: [5, 10, 100],
    gender: "female",
  },
];

/*
0. Get all employees that are female
*/

const femaleEmployees = _.filter(s2Employees, (e) => e.gender === "female");
console.log(femaleEmployees);

/*
1. Get all the S2 employees whose favorite color is blue or purple, and order the results by firstName (ascending order)
*/

const employeesWHoseFavoriteCOlorIsBlueOrPurpleOrderedByFirstNameAscending =
  _.chain(s2Employees)
    .filter(
      (e) =>
        e.favoriteColor === COLORS.BLUE || e.favoriteColor === COLORS.PURPLE
    )
    .sortBy("firstName")
    .value();

console.log(
  employeesWHoseFavoriteCOlorIsBlueOrPurpleOrderedByFirstNameAscending
);

/*
2. Get all S2 Employees whose last name begins with a C, has at least one favorite number that is greater than 100, and gender is male
*/

const filtered = _.filter(s2Employees, (e) => {
  if (!e.lastName) return false;
  return (
    _.startsWith(e.lastName, "C") &&
    _.some(e.favoriteNumbers, (n) => n > 100) &&
    e.gender === "male"
  );
});

console.log("filtered", filtered);

/*
BONUS. Get the same object (s2Employees) into a variable but for each person, include a new field called 'sumOfFavoriteNumbers' that is the sum of each person's fav numbers
*/

const summed = _.map(s2Employees, e => ({...e, sumOfFavoriteNumbers: _.sum(e.favoriteNumbers)}));
console.log("summed", summed);

/*
BONUS. 
Get a list of all the S2 employees favorite colors without any duplicates
ie result should be the following: ["red", "purple", "blue", "pink"] 
*/

const deDupedCOlors = _.chain(s2Employees)
  .map(e => e.favoriteColor)
  .uniq()
  .filter(c => !!c)
  .value();

  console.log(deDupedCOlors);
