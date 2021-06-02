//DESTRUCTURING

/*

it gives us a very convient way of extracting a 
data from a data structure 
like an object or an array.

*/

//ES5
var john = ["John", 26];
var name = john[0];
var age = john[1];

//ES6
const [name2, age2] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "John",
  lastName: "Smith",
};
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

//ANOTHER EXAMPLE

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age3, retirement] = [age, 65 - age];
calcAgeRetirement(1990);
console.log(age3);
console.log(retirement);

//ARRAYS IN ES6
const boxes = document.querySelectorAll(".box");
console.log(boxes)

const boxesArr6 = Array.from(boxes);
console.log(boxesArr6)
boxesArr6.forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

//loop
for (const cur of boxesArr6) {
  if (cur.className.includes("box2")) {
    continue;
  }
  cur.textContent = "I changed to blue";
}

/**
    we use for each and map to loop through an array, but the continue
    and break statements cannot be used with them so we use the for of loop
    instead of normal for loop
 */

//To know the ages greater than 18

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true)); //3
console.log(ages[full.indexOf(true)]); //21

//ES6
//findIndex and find methods
console.log(ages.findIndex((cur) => cur >= 18)); //3
console.log(ages.find((cur) => cur >= 18)); //21

//SPREAD

/**
 * It is used to expand element of an array
 */
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

//it can also be used to join arrays
const familySmith = ["Jane", "John", "Mark"];
const familyMiller = ["Matt", "David", "Bob"];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

//spread can also be used on nodeList. Nodelist is what query selectorALL returns
const head = document.querySelector("h1");
const boxes2 = document.querySelectorAll(".box");
const all = [head, ...boxes2];

Array.from(all).forEach((cur) => (cur.style.color = "purple"));

//REST PARAMETERS(...)

//ES5
function isFullAge5() {
  //console.log(arguments)
  var argsArr = Array.prototype.slice.call(arguments);
  
  argsArr.forEach(function (cur) {
    console.log(2021 - cur >= 18);
  });
}

isFullAge5(1997, 2005, 2007);

//ES6
function isFullAge6(...years) {
  years.forEach((cur) => console.log(2021 - cur >= 18));
}

isFullAge6(2001, 1999, 2009);

//DEFAULT PARAMETERS
// when we want one or more parameter of a function to be preset(default)

//ES5
function SmithPerson(firstName2, yearOfBirth2, lastName2, nationality) {
  lastName2 === undefined ? (lastName2 = "Smith") : (lastName2 = lastName2);
  nationality === undefined
    ? (nationality = "American")
    : (nationality = nationality);

  this.firstName2 = firstName2;
  this.yearOfBirth2 = yearOfBirth2;
  this.lastName2 = lastName2;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);

//ES6

function SmithPerson2(
  firstName3,
  yearOfBirth3,
  lastName3 = "Smith",
  nationality2 = "American"
) {
  this.firstName3 = firstName3;
  this.yearOfBirth3 = yearOfBirth3;
  this.lastName3 = lastName3;
  this.nationality2 = nationality2;
}

var mary = new SmithPerson2("Mary", 2005);

//MAPS

const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer");
question.set(false, "Wrong, please try again");

//retrieve data from the map
console.log(question.get("question"));
//length of map
console.log(question.size);
//deleting from a map
/*if(question.has(4){
    question.delete(4);
}*/

//delete all
//question.clear();

//Looping through a map
question.forEach((value, key) =>
  console.log(`This is ${key}, and it's set to ${value}`)
);

//we can use for of
for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}

/*const ans = parseInt(prompt('Write the correct answer'))
console.log(question.get(ans === question.get('correct')))
*/

//CLASSES
//Es6 way of inheritance

//ES5
/*var Person5 = function(name5, yearOfBirth5, job5){
    this.name5 = name5;
    this.yearOfBirth5 = yearOfBirth5;
    this.job5 = job5;
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth5;
    console.log(age)
}

var john5 = new Person5('John', 1990, 'teacher')
john5.calcAge()*/

//ES6
/*class Person6{
    constructor (name6, yearOfBirth6, job6){
        this.name6 = name6;
        this.yearOfBirth6 = yearOfBirth6;
        this.job6 = job6;
    }

    calcAge2(){
        var age2 = new Date().getFullYear() - this.yearOfBirth5;
        console.log(age2)
    }
}

const john6 = new Person6('John', 1990, 'teacher')
john6.calcAge2()
*/

//CLASSES WITH SUBCLASSES
//ES5
var Person5 = function (name5, yearOfBirth5, job5) {
  this.name5 = name5;
  this.yearOfBirth5 = yearOfBirth5;
  this.job5 = job5;
};

Person5.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth5;
  console.log(age);
};

var john5 = new Person5("John", 1990, "teacher");
john5.calcAge();

var Athlete5 = function (name5, yearOfBirth5, job5, olymicGames, medals) {
  Person5.call(this, name5, yearOfBirth5, job5);
  this.olymicGames = olymicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);
var johnAthelete5 = new Athlete5("John", 1990, "Swimmer", 3, 10);

Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};
johnAthelete5.calcAge();

//ES6
class Person6 {
  constructor(name6, yearOfBirth6, job6) {
    this.name6 = name6;
    this.yearOfBirth6 = yearOfBirth6;
    this.job6 = job6;
  }

  calcAge2() {
    var age2 = new Date().getFullYear() - this.yearOfBirth5;
    console.log(age2);
  }
}

class Athlete6 extends Person6 {
  constructor(name6, yearOfBirth6, job6, olympicGames, medals) {
    super(name6, yearOfBirth6, job6);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}


const johnAthelete6 = new Athlete6("John", 1990, "swimmer", 3, 10);

johnAthelete6.wonMedal();
johnAthelete6.calcAge2();
