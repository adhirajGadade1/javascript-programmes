console.log("================Count total number of vowels in string");
var sentence = "I am very good IT Developer";
var vowels = "aeiou";
var countVowels = 0;

for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  char = char.toLowerCase();
  if (vowels.includes(char)) {
    countVowels++;
  }
}
console.log(`count of vowels is : ${countVowels}`);

console.log("====================Sum of Cubes =========================");

var sumcubes = 0;
for (let i = 1; i <= 5; i++) {
  sumcubes = sumcubes + i * i * i;
}
console.log(sumcubes);

console.log("==============log Odd Position chAR====================");

function oddPositionedchars(sentence) {
  for (let index = 0; index < sentence.length; index++) {
    var char=sentence.charAt(index);
    if (index%2==1 && char !=" ") {
      console.log(char);
    }
  }
}
var char=oddPositionedchars(`Hard work always pay back`);
var char =oddPositionedchars(`Soon I will be UI IT Champ`);
