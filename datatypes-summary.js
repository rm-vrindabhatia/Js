//Primitive (call by value )
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Javascipt is a dynamically typed language
const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 3445646764434679677757n;

//Non-Primitive (Refrence)
 //types : Arrays, Objects, Functions

 const heros = ["shaktiman", "spiderman", "batman"]
 let myObj = {
    name: "Vrinda",
    age: 21,
 }

 const myFunction = function(){
    console.log("Hllo World");
 }

 console.log(typeof bigNumber);
 console.log(typeof null); //object
 console.log(typeof myFunction);
 console.log( typeof id);