// singleton
// objects.create yehse banate hai singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    // object :-
    name: "Manish", // name :- ko be object string ke tarah treat karta hai => "name"
    "full name": "Manish Rajak", // this is accessable only ["full name"] Like this
    [mySym]: "mykey1", // symbol decleation as a symbol
    age: 20,
    location: "bengaloru",
    email : "Manish@google.com"
}

// console.log(JsUser.email);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Manish@chatgpt.com"
// object.freeze(JsUser) // now can not change 
JsUser.email = "manish@bsd.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){ // ek function ke property dusre fumction mai use karna. by "this." be can access list of 1st function propertys;  
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


