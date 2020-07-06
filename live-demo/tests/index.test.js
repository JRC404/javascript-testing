// what is this going to test?
// index.js

// const { TestScheduler } = require("jest");
const index = require('../index');

// test driven development - you build your application around your tests
// you write your tests first and then the code follows
// it's a fail, pass, hopefully pass... methodology

describe('tests that return addition and subtraction of numbers', () => {
    test('should return 45 when 25 and 20 are passed as parameters', () => {
        expect(index.addition(25,20)).toBe(45);
    })
    
    test('should return 0.3 when 0.2 and 0.1 are passed as parameters', () => {
        expect(index.addition(0.2,0.1)).toBeCloseTo(0.3);
    })

    test('should return 5 when 7 and 2 are passed', () => {
        expect(index.subtraction(7,2)).toBe(5);
    })

})

// adam to be inside of studentNames
test('that student name contains Adam', () => {
    expect(index.studentNames).toContain("Adam");
})

test('that strength increases after person trains', () => {
    expect(index.james.strength).toBe(56);
    index.james.train();
    expect(index.james.strength).toBe(57);
    index.james.strength = 56;
    // index.james.beLazy();
})

test('that strength equals 56 for James', () => {
    expect(index.james.strength).toBe(56)
})

describe('tests that return both true and false', () => {
    test('should return true', () => {
        index.value = true;
        expect(index.value).toBeTruthy(); // passes because value = true
        index.value;
    })
    
    test('should return false', () => {
        index.value = false;
        expect(index.value).toBeFalsy(); // fails because value = true
        index.value;
    })

    test('should return true', () => {
        index.value = true;
        expect(index.value).toBeTruthy(); // fails because value = true
        index.value;
    })
})

test('should return admin rights', () => {
    index.value = true;
    expect(index.value).toBeTruthy();
    if(index.value) {
        console.log("admin rights");
    }
    else {
        console.log("ha. user.");
    }
})

// setup and a teardown of all tests


