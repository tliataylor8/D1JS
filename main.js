
// JS Data Types- Day 1 lessons

// Numbers aka intergers
// String
// Boolean
// Null
// Undefined
// Symbol
// Object


// **Number Data Types (2)**

// -(1)intergers are whole numbers. Ex: -1, 0, 1, 2
// -(2)floats are decimal numbers. Ex: 2.718, 3.14, 0.5, 0.25

// -Arithmetic operators:
    // 1+2
    // =>3

    // 1-2
    // =>-1

    // 10/2
    // =>5

    // 6*2
    // =>12

//Math.pow(3,2)
// =>9

// console.log(Math.pow(3,2))
// console.log(Math.pow(2,6))
// console.log(Math.sqrt(4))
// console.log(Math.sqrt(64))
// console.log(Math.round(2.678))

//returns a random float btwn 0 and 1
// console.log(Math.random())

//rounds down to nearest integer
// console.log(Math.floor(3.14))

//rounds up to nearest integer 
// console.log(Math.ceil(3.999))

// rounds up or down
// console.log(Math.round(3.14))
// console.log(Math.round(3.9))



// **String Data Type**
// 1. surround a word  or phrase w/ double quotes
// "like this"

// // 2. single quotes
// 'like this'

// // 3. backticks
// `like this`

// String helper methods
//console.log('Bronx'.length);
//counts the space (so 'Da Bronx' is 8 for length)
//console.log('Da Bronx'.length);

//console.log('hello'.charAt(0));
//=> h

//console.log('20'.charAt(0));
//=>2

//console.log(typeof'hello'.charAt(0));
//=> string

//console.log('hello'.toUpperCase());
//=> HELLO

//String Concatenation: can combine strings
//console.log('hello, ' + 'world')
//=> hello, world

// console.log(2+3+'50')
// =>550

//console.log(parseInt(123))
//=>123

// console.log(typeof parseInt(123))
// =>number

// console.log(typeof parseFloat(123.34658))
// =>number



//**Variables**
//defined as a container that holds data, stored in the memory of a computer so they can be referenced later
//to initialize a variable you use certain keywords: let, const, var

//let a;
//we initialized a variable named 'a'
//console.log(a);
//=>underfined

// let food = 'pizza'
// console.log(food)
// =>pizza

//let chris = 'pizza'
//console.log(chris)
// =>pizza

// const greggsFavBand = 'The Smiths'
// let jonsFavBand = 'Mastodon'
// const greggsFavBand = 'Bad bunny'
// console.log(greggsFavBand)
// => error 
//const variables cannot be reassigned
//let variables can be changed

// var classFavLunch = 'Bodega'
// console.log(classFavLunch)
//var pre ES5
//let const came from ES6
//ES5 and ES6 are different updates to JS. different releases every year-- we are currently on ES13. But ES6 brought the most substantial changes that year.

//{
//let aaron = 'chill'
//}
//console.log(aaron);
//undefined
//block scope bc function confined to {}

//a block variable can be accessed from anywhere 

//NO 'var' IN LAB ASSIGNMENTS

// String interpolation ``
//const firstName = "Brian"
//const age = 33
//console.log(`My name is ${firstName} and on my next birthday, I will be ${age + 1} years old`)
//=> My name is Brian and on my next birthday, I will be 34 years old

// NaN = not a number
//console.log(parseInt('sofa'))
// => NaN



//**Boolean Data Type**
//boolean logical operators
//AND denoted as &&
//OR denotated as ||
//true && true
// true || false
// NOT, denoted !
// !true
// => fale
// Null
// let bankAccount = null;

let car = 'Audi'
// = means value assignment

let car2 = 'BMW'
// car == car2
// => false
// == comparison operator 
// if the 2 variables have the same value

// car == car2
// if the 2 variables have the same value and data type
//console.log(1 == '1')
//console.log(1 === '1')