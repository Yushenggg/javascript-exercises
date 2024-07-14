const convertToCelsius = function(farenheit) {
  let output = (farenheit -32) *5/9;
  output = Math.round(output*10)/10
  return output
};

const convertToFahrenheit = function(celcius) {
  let output = (celcius*9/5)+32
  output = Math.round(output*10)/10
  return output
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
