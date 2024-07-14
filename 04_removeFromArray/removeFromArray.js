const removeFromArray = function(inputArr,...args) {
    let elementIndex = 0;
    for(let arg of args){
    while(inputArr.includes(arg)){
        elementIndex = inputArr.findIndex((element)=>element===arg);
        inputArr.splice(elementIndex,1)
        }
    }
    return inputArr
};

// Do not edit below this line
module.exports = removeFromArray;
