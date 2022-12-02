const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
console.log(fromEuroToDollar(10));

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 106.5;
    return valueInYen
}
console.log(fromDollarToYen(10));

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.006;
    return valueInPound;
}
console.log(fromYenToPound(10));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };