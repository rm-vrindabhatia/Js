const score =400
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherno = 1123.5856654646
// console.log(otherno.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));   // commas as per Indian system

//++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); // mostly used
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20

console.log(Math.floor((Math.random() * (max-min + 1)))+min); //important 