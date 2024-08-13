
let fruit =["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit);

console.log("============= Print Frist and Last Element ===============");
let fristElement = fruit[0];
let lastElement = fruit[fruit.length-1]
console.log(`Frist Element is : ${fristElement}, Last Element is : ${lastElement} `);

console.log("============= Add Papaya before the Banana ===============");

let fruit1 =["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruit1);
let fruitOne=fruit1.splice(0,0,"Papaya");
console.log(`Adding the element before Banana is : ${fruit1}`);

console.log("============= Remove the Mango from Array ===============");

console.log(fruit1);
let fruitTwo = fruit1.splice(4,1);
console.log(`After removing Mango : ${fruit1}`);

console.log("============= Insert the Pineapple at the last Position ===============");
console.log(fruit1);
let fruitThree = fruit1.push("Pineapple");
console.log(`After insertion the Pineapple at the last Position : ${fruit1}`);

console.log("============= Insert the Dragon Fruit before the Water Melon ===============");
console.log(fruit1);
let fruitFour = fruit1.splice(4,0,"Dragon Fruit");
console.log(`Insertion of Dragon Fruit Before Water Melon ${fruit1}`);

console.log("============= Replace the Orane the Kiwi  ===============");
console.log(fruit1);
let fruitFive = fruit1.splice(2,1,"Kiwi");
console.log(`Atfer Replacing the Orange with Kiwi : ${fruit1}`);

console.log("============= Print the element from 1 to 4  ===============");
console.log(fruit1);

    let fruitSix= fruit1.slice(1,4)
console.log(`Element from 1 to 4 : ${fruitSix}`);

console.log("============= Print the Last 3 Elements ===============");
console.log(fruit1);

console.log(`Last 3 elements are : ${fruit1[4]}, ${fruit1[5]},${fruit1[6]}`);











