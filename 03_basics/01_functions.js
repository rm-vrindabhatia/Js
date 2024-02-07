function sayMyName(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

// sayMyName //reference
// sayMyName()  //function execution

function addTwoNumbers(number1,number2){ //parameters
    // console.log(number1+number2);
    // let result = number1+number2
    // return result
    return number1+number2 //optimized
}

// addTwoNumbers(3,4)  //7   //arguments
// addTwoNumbers(3,"4") //34
// addTwoNumbers(3,null) //3
const result = addTwoNumbers(3,5)
// console.log("Result:",result);  //undefined becoz nothing is returned
function loginUserMessage(username = "sam"){ //default value when no argument is provided
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Vrinda"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){   //when no of parameters are innumerable or unpredictable
    //"rest operator" ...
    return num1 
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Vrinda",
    price: 199
}
function handelObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
// handelObject({
//     username: "sam",
//     price:199
// })

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));