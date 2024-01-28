//array
//arrays are resizable in js and can contain mix datatype
const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]
const myarr2 = new Array(1,2,2,3)
// console.log(myArr[0]);

//arrays create shallow copy while creating copy means copies share the same reference
//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()  //pops the last element

// myArr.unshift(9)    //inserts element at index 0 and shifts other elements by 1
// myArr.shift()  // shifts the element at 0 index towards left(removes)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));  // when element is not present it returns -1
// console.log(myArr.includes(3));

// const newArr = myArr.join()  //binds and convert to string type

// console.log(myArr);
// console.log(typeof newArr);

//slice and splice (difference)

// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)   //does not manipulates original array and last index element is not included

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)   //manipulates original array and last index element is included
// console.log(myn2);
// console.log("C", myArr);

const marvel_heroes = ["thor","Ironman","spiderman"]
const dc = ["abc","def","ghij"]

// marvel_heroes.push(dc)  //pushes dc arrays as nested array and makes changes in existing array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// const newarr = marvel_heroes.concat(dc) //returns a new array
// console.log(newarr);

//Spread - advantage over concat is that we can cacatenate more than two arrays
// const allheroes = [...marvel_heroes, ...dc]
// console.log(allheroes);

const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const new_arr2 = arr2.flat(Infinity)
console.log(new_arr2);

//can be used in data scraping
console.log(Array.isArray("V"));
console.log(Array.from("Vrinda"));
console.log(Array.from({name: "Vrinda"}));  //object intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));