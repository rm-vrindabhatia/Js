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
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

const User = new Object() //singleton object


User.id = "123abc"
User.name = "Sammy"
User.isLoogedIn = false
// console.log(User);
const User2 = { //non-singleton object
    email:"some@gmail.com",
    fullname: {
        userfullname: "Vrinda",
        lastname:"Bhatia"
    }
} 
// console.log(User2.fullname.userfullname);

//merging two objects
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj3 = {
    5:"e",
    6:"f"
}
// const obj4 = Object.assign(obj1,obj2) //when keys are same then keys from obj2 will be displayed else keys f both obj1 and obj2 will be merged
// const obj4 = Object.assign({},obj1,obj2,obj3) //for combining more than one object
const obj4 = {...obj1, ...obj2, ...obj3} //using spread operator
// console.log(obj4);  

const users = [   //just like array
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"d@gmail.com"
    },
    {
        id:5,
        email:"e@gmail.com"
    }
]
// console.log(users[0].email);
console.log(User);

console.log(Object.keys(User)); //outputs an array
console.log(Object.values(User));
console.log(Object.entries(User)); //output nested array
