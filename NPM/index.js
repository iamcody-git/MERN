//var generateName = require('sillyname'); : this is using cjs 

// this is using modules
import generateName from "sillyname"
var sillyName = generateName();

console.log(`My Name is ${sillyName}`);


// .random() is no more acceptable in js array: so random name can't is generate this way
// import superheros from "superheros"
// const name = superheros.random();

// console.log(`I am ${name}`);
