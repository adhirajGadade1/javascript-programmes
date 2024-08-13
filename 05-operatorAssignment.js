function greaterNumber(n1, n2) {
    var result = n1>n2 ? n1:n2;
    console.log(`Given numbers : ${n1}, ${n2} and greater number is ${result}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("=========================================");

function isEvenOrOdd(num){
   
    var res = num%2==0 ? true:false;
    console.log(`Given number is ${num}, Even :${res}`);
    return res;
}

var res = isEvenOrOdd(29);


var res = isEvenOrOdd(44);


var res = isEvenOrOdd(101);


var res = isEvenOrOdd(0);

console.log("=========================================");


function wordLength(word) {
   var res = word.length%2==0 ? true : false;
   console.log(`${word}, is even: ${res}`);
    return res;
}
var res = wordLength("JavaScripts");
var res = wordLength("developer");
var res = wordLength("Google");