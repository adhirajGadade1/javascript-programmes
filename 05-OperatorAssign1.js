function squareOfWordLength(sentence){

    console.log(`Given sentence is: ${sentence}`);

    var result = sentence.split(" ");

    var len = result.length;

    var square = len * len;

    return square

}

var result = squareOfWordLength("JavaScript");

console.log(`Square of world length is: ${result}`);

 

var result = squareOfWordLength("Google Chrome");

console.log(`Square of world length is: ${result}`);

 

var result = squareOfWordLength("Web Developer Smart");

console.log(`Square of world length is: ${result}`);

var String = "I am Angular Developer";


var res = String.length/4;
console.log(`length of string is: ${String.length}, Divided by total number of word; ${res}`);

var ress= String.length*4;
console.log(`length of string is: ${String.length}, Multiply by total number of words ${ress}`);
