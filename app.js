const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 106.5;
    return valueInYen
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.006;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };