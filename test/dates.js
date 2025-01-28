// Date ke object datatype hota hai 


let myDate = new Date()
// console.log(myDate.toDateString()); // Tue jan 28 2025 
// console.log(myDate.toISOString()); //2025-01-28
// console.log(myDate.toLocaleDateString()); //1/28/2025
// console.log(myDate.toLocaleString()); // 1/28/2025
// console.log(myDate.toLocaleTimeString()); // 4:50:28 AM
// console.log(myDate.toJSON()); // 025-01-28T04:50:28.608Z

//let myCreatedDate = new Date(2025,0,28)
let myCreatedDate = new Date("01-28-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // ek number milta hai => 1738040332269
// console.log(myCreatedDate());
// console.log(Math.floor(Date.now()/1000));  // in sec.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('Default',{
    weekday: "long"
})







