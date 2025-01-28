// Array
// const myArr = [0, 1, 2, 3, 4, 5]

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // range 1,2

// console.log(myn1);
// console.log("B ", myArr); // B [0,1,2,3,4,5]


// const myn2 = myArr.splice(1, 3) // excludes 1 to 3
// console.log("C ", myArr);   // C [0,4,5]
// console.log(myn2);         // [1,2,3]

// ************ ARRAY ***********************
// if we directly add [2,3[4,5]] look like this  directly push ex.:- str1.push(str2)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); two string added without 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("manish"));
console.log(Array.from("manish"));
console.log(Array.from({name: "manish"})); // if we put Array in object they give [] empty array  


