// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach

array.forEach((n) => {console.log(n) });

const arrayTest = [2,5,8];

arrayTest[5] = 9;

arrayTest.forEach((n) => {console.log(n) });

// use map

const newArray = arrayTest.map(i => i+1);

// use pop

newArray.pop();
console.log(newArray);

// use push

newArray.push(6);
console.log(newArray);

// use shift

newArray.shift();
console.log(newArray);

// use unshift
newArray.unshift(13);
console.log(newArray);


// use filter