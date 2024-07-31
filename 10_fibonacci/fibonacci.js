const fibonacci = function(seqNum) {
    

    let a = 1
    let b = 1
    let c = 0
    if (seqNum ==1 || seqNum == 2) return 1
    else if (seqNum<0) return "OOPS"
    let currItr = 2
    while (currItr < seqNum){
        c= a+b
        a=b
        b=c
        currItr++
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
