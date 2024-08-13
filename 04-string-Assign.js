function stringHandsOn() {
    var str = "   Hey you are doing good, keep it up    ";
    console.log(`The String is : ${str}`);
    
    var strLength = str.length;
    console.log(`The lenth of String is: ${strLength}`);

    var strTrim = str.trim();
    console.log(`String After trim is : ${strTrim}, 
        Lenth of string after trim is: ${strTrim.length}`);
    
    var totalLength = strLength - strTrim.length;
    console.log(`Total spaces removed in the String are: ${totalLength}`);
    
    var fristChar = strTrim.charAt(0)
    var lastChar = strTrim.charAt(strTrim.length-1);
    console.log(`Frist Char is : ${fristChar}, Last char is : ${lastChar}`);

    var words = strTrim.split(" ");
    var wordsLength = words.length;
    console.log(`Total number Of Words are: ${wordsLength}`);

    var res = strTrim.indexOf("good");
    console.log(`index of good word is ${res}`);

    var subStr = strTrim.substring(22);
    console.log(`Sub String of String is ${subStr}`);

    var res = strTrim.endsWith("up")
    console.log(`String is ends with up is it : ${res}`);

    var res = strTrim.startsWith("Hey");
    console.log(`String is starts with hey is it : ${res}`);

    
}

stringHandsOn();