var great = "Good Morning";

console.log("Given String is:", great);

var greatLength = great.length;
console.log("Total length of chara is:", greatLength);

var greatCharAt = great.charAt(0);

console.log("char at index 0 is:", greatCharAt);

var greatCharAt = great.charAt(6);

console.log("char at index 0 is:", greatCharAt);

console.log("====== Last Char =================");

var res = great.charAt(great.length - 1);

console.log("Last char of string;", res);

console.log("====== Upper case =================");

var upperCaseAt = great.toUpperCase();

console.log("Result is:", upperCaseAt);

console.log("====== Concated =================");
var fristName = "Adhiraj";
var lastName = "Gadade";
var res = fristName.concat(lastName);
console.log(res);

console.log("====== trim =================");

var day = "   saturday     ";
var dalength = day.length;
console.log("Befor trim:", dalength);

var dayAfterTrim = day.trim();
var dayAfterLength = dayAfterTrim.length;

console.log("after trim:", dayAfterLength);
console.log("trimmed var:", dayAfterTrim);

console.log("====== Include =================");

var res = great.includes("mor");
console.log(res);


