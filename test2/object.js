// ********* objects 2 ********************************

//const tinderUser = new Object()  // as a constructor this a singleton 

const tinderUser = {} // this is not singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggenIn = false

//console.log(tinderUser);

const regularUser = {
    email: "something@gmail.com",
    fullname: {
        username: {
            fristname: "Manish",
            lastname: "Rajak"
        }
    }
}

//console.log(regularUser.fullname.username.fristname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2 }
//console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
//console.log(obj4);

const obj5 = {...obj1, ...obj2}
//console.log(obj5); 

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggenIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggenIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggenIn')); //cheack value present or not

const object = {   dkjnk: {},
  klfnlkn: {}
}






