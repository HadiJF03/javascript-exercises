const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number" || num1<0 || num2<0) return "ERROR";
    let sum = 0;
    let largest = num1>num2 ? num1:num2;
    let smallest = num1<num2 ? num1:num2;
    for(i =1; i<=largest;i++){
        sum += i; 
        sum += smallest>i ? i:0;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
