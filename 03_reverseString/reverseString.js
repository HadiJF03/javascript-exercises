const reverseString = function(string) {
    if (string.length==0) return string;
    let reversedString = "";
    for(let i = string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
