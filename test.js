const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

describe("Practice test", () => {
    test("The sum between 14 and 9 should equal 23", () => {
        expect(sum(14, 9)).toBe(23);
    });
});

describe("Currency converter tests", () => {

    test("1 euro should be 1.2 dollars", function(){
        expect(fromEuroToDollar(1)).toBe(1.2);
    });

    test("3.5 euros should be 4.2 dollars", () => {
        expect(fromEuroToDollar(3.5)).toBe(4.2);
    });
    
    test("3 dollars should be 319.5 yen", () => {
        expect(fromDollarToYen(3)).toBe(319.5)
    });

    test("12 dollars should be 1278 yen", () => {
        expect(fromDollarToYen(12)).toBe(1278);
    });
    
    test("120 yen should be 0.72 pounds", () => {
        expect(fromYenToPound(120)).toBe(0.72);
    });

    test("1500 yen should be 9 pounds", () => {
        expect(fromYenToPound(1500)).toBe(9);
    });
});


