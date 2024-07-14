const repeatString = function(inputStr,repeatInt) {
    if(repeatInt<0){
        return "ERROR";
    }
    let output = '';
    for (let i = 0; i < repeatInt; i++) {
        output = output.concat(inputStr);
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
