# Testing

0. Our initial project setup

* npm init -y
* Change the test script from "no test specified" to "jest"
* npm i jest --save-dev
* [jest documentation](https://jestjs.io/docs/en/expect): have this open to help you!

The folder structure after setup:
```
project
│   index.js
│   
└───tests
│      index.test.js
│   
│   package.json
```

1. We are going to follow the TDD methodology, create our tests first. 

    * Identifying what we want our function to do - planning
    * Writing the test for the function
    * Write the code for the function
    * See the test pass
    * Refactor

    **Head to your index.test.js**

    Here we will write our first test. it's a simple one: We want to see if a function returns the value of two numbers added together. To do this, we will use matchers from the Jest documentation. Our matcher will allow us to state what result we exepct to receive from the function. Let's dive in!

    ```javascript
        const index = require('../index'); // require our exports for later

        // our test keyword states the intent to run a test, it can also be called 'it' - see example below for that alias setup.
        // our test description follows in plain English. We want our description to leave no doubt for what our test should be checking for. 
        // In this case, it is returning 45 when two parameters: 25 & 20, are passed into the function. 
        test('should return 45 when 25 and 20 are passed as parameters', () => {
        expect(index.addition(25,20)).toBe(45);
        })
    ```
    ```
     FAIL  tests/index.test.js
        ✕ should return 45 when 25 and 20 are passed as parameters (2 ms)

        ● should return 45 when 25 and 20 are passed as parameters

    ReferenceError: index is not defined

    test('should return 45 when 25 and 20 are passed as parameters', () => {
            expect(index.addition(25,20)).toBe(45);
                   ^
         })
    ```


