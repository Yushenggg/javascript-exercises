const findTheOldest = function(objArr) {
    let currentYear = new Date().getFullYear()
    let final =  objArr.reduce((oldest,currentItem)=>{
        let currEndYear = "yearOfDeath" in currentItem ? currentItem.yearOfDeath : currentYear
        let currAge = currEndYear - currentItem.yearOfBirth

        let oldEndYear = "yearOfDeath" in oldest ? oldest.yearOfDeath : currentYear
        let oldAge = oldEndYear - oldest.yearOfBirth
        console.log(currentItem,oldest)
        return currAge>=oldAge ? currentItem:oldest })

    return final

};

// Do not edit below this line
module.exports = findTheOldest;
