const palindromes = function (input) {
  
    let alphanum = "qwertyuiopasdfghjklzxcvbnm1234567890"
    let clean = input.toLowerCase().split("").filter((chara)=> alphanum.includes(chara)).join('')
    let reverse = input.toLowerCase().split("").filter((chara)=> alphanum.includes(chara)).reverse().join('')
    return clean == reverse
    

};

// Do not edit below this line
module.exports = palindromes;
