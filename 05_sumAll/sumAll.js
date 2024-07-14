const sumAll = function(lowerNum,biggerNum) {
    if(typeof(lowerNum)!=="number" || typeof(biggerNum)!== "number" || lowerNum<0 ||biggerNum<0) return "ERROR"
    if(lowerNum>biggerNum)[lowerNum,biggerNum]=[biggerNum,lowerNum]
    let output = 0;
    while (lowerNum<=biggerNum){
        output +=lowerNum;
        lowerNum++;
    }

    return output
    


};

// Do not edit below this line
module.exports = sumAll;
