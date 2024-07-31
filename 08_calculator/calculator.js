const add = function(num1,num2) {
  return num1 + num2
	
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(arrIn) {
  return arrIn.reduce((num1,num2)=>{return num1+num2},0)
};

const multiply = function(arrIn) {
  return arrIn.reduce((num1,num2)=>{return num1*num2},1)
};

const power = function(num1,num2) {
  return num1**num2

};

const factorial = function(numIn) {
  let sum = 1
  while (numIn>1){
    sum*=numIn
    numIn--
  }
  return sum
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
