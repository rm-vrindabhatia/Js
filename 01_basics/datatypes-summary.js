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


//-------------------------Memory-------------------
// Stack (Primitive), Heap(Non-Primitive)

// Primitive
let myName = "Vrinda"

let surname = myName
surname = "Bhatia"
console.log(myName);
console.log(surname);


//Non-Primitive
let user1 = {
   email: "user@google.com",
   upi : "user@ybl"
}
let user2 = user1
user2.email = "user@google.com"
console.log(user1.email);
console.log(user2.email);