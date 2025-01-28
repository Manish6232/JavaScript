function sayMyName(){
    // function delection 
}
sayMyName() // function call 

function addTwoNumber(numb1, numb2){
    // let result = numb1 + numb2
    // return result
    return numb1 + numb2
}

// const result = addTwoNumber(3,5)

// console.log("Result: ", result);

function calculateCartPrice(val1, val2, ...num1){ 
    return num1
} // val1 = 200 , val2=300 
//console.log(calculateCartPrice(200,300,400,500)) 
// output 400,500

const user = {
    username: "manish",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
    
}

//handleObject(user)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,400,500,600]));
