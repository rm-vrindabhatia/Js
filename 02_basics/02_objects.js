//singleton - when object is made from constructor
// Object.create

//object literals
const mySym = Symbol("key1")

const JsUser ={ 
    name: "Vrinda",
    "full name": "Vrinda Bhatia",
    [mySym]: "symbooollll",//to use symbol as key otherwise it will act as string
    age: 21,
    location: "Vrindavan",
    email: "vrinda123google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Two ways to access values from keys
// console.log(JsUser.email);
// console.log(JsUser["full name"]); // key declared this way cannot be accessed using . operator

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);  //when used with . operator will return "undefined"

JsUser.email = "chatgpt.com";
// console.log(JsUser);
// Object.freeze(JsUser)  // to freeze an object 
JsUser.email = "bard.com" //updating a freezed object will not return any error but will not update a object
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JsUser");
}

JsUser.greeting2 = function(){  //`` are used for string interpolation
    console.log(`hello JsUser,${this.name}`); //refrencing the object using this
}
// console.log(JsUser.greeting); //function returned back
console.log(JsUser.greeting());
console.log(JsUser.greeting2());