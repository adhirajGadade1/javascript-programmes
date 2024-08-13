const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("==============Total Element or Length of Array ==================");

const array1 = array.length;
console.log(`Toal elements are available or length is: ${array1}`);

console.log("==============Frist Number and Last Number on Array ==================");
console.log(`Array is ${array}`);
const array2 = array[0];
const array3 = array[array.length-1];
console.log(`Frist Element is ${array2}, Last Element is ${array3}`);

console.log("============== Print Third Last element ==================");
console.log(`Array is ${array}`);
const array4 = array[array.length-3];
console.log(`Third last element is ${array4}`);

console.log("============== Print Even Number using For Loop ==================");
console.log(`Array is ${array}`);

// const array6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const array5 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        array5.push(array[i]);
    }
}

console.log(array5);

console.log("============== Print Odd Number using For Loop ==================");
console.log(`Array is ${array}`);

// const array6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const array6 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
        array6.push(array[i]);
    }
}

console.log(array6);

console.log("============== 6, 7, 8 On Hold  ==================");

console.log("============== Find the Number Multiplied by 5  ==================");
console.log(`Array is ${array}`);

// const array6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const array7 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
        array7.push(array[i]);
    }
}

console.log(array7);

console.log("============== Is number 115 available in Array  ==================");
console.log(`Array is ${array}`);
let isNumberAvailable= false
for (let i = 0; i < array.length; i++) {
    if (array[i] === 125) {
         isNumberAvailable=true;
       
    }
}
console.log(`Is number 115 available in Array: ${isNumberAvailable}`);

console.log("============== Is number 23 available in Array  ==================");
console.log(`Array is ${array}`);
let isNumberAvailableOne= false
for (let i = 0; i < array.length; i++) {
    if (array[i] === 23) {
         isNumberAvailableOne=true;
       
    }
}
console.log(`Is number 23 available in Array: ${isNumberAvailableOne}`);

console.log("============== Insert Number 55, 66 at index 3  ==================");
console.log(`Array is ${array}`);

let array8=array.splice(3,0,55,66)
console.log(`After inserting 55,66 at index 3 : ${array}`);

console.log("============== Insert Number 55, 66 at index 3  ==================");
const arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`Array is ${array}`);

let array9 = arrayNum.splice(4,3);
console.log(`Deleted number are : ${array9}`);
console.log(`After deleting the number array is : ${arrayNum}`);




