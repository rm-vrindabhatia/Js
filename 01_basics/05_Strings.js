const name = "Vrinda"
const repoCount = 5

console.log(name + " "+repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); //String interpolation using backticks

const discordName = new String('Vbh-20')  // using objects to declare string


// console.log(discordName[0]);
// console.log(discordName.__proto__);

// console.log(discordName.length);
// console.log(discordName.toUpperCase());
// console.log(discordName.charAt(2));
// console.log(discordName.indexOf('t'));
// console.log(discordName.indexOf('V'));

// const newdiscordName = discordName.substring(0,2) //Last value not included
// console.log(newdiscordName); //do not works on negative values

// const anotherStr = discordName.slice(0,2); //works on negative values too
// console.log(anotherStr); // last value also not included

const newStr1 = "    Vrinda    "
console.log(newStr1);
console.log(newStr1.trim()); //works only whitespaces and newline characters

const url = "https://vrinda.com/vrinda%20bhatia"

console.log(url.replace('%20', '-'));
console.log(url.includes('264643'));
console.log(discordName.split('-'));