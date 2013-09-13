/// <reference path="../Calculator.js" />

module("Calculator")

test("Sum two numbers equals", function () {

    //Arrange - Act
    var result = Calculator.sum(2, 2);

    //Assert
    equal(result, 2 + 2, "Sum 2 + 2 should return 4");
});

test("Sum two differents numbers where first number is bigger than second", function () {

    //Arrange - Act
    var result = Calculator.sum(2, 1);

    //Assert
    equal(result, 2 + 1, "Sum 2 + 1 should return 3");
});

test("Sum two differents numbers where first number is smaller than second", function () {

    //Arrange - Act
    var result = Calculator.sum(3, 5);

    //Assert
    equal(result, 3 + 5, "Sum 3 + 5 should return 8");
});

test("Divide two differents numbers where the divisor is different than zero", function () {
    //Arrange - Act
    var result = Calculator.divide(4, 2);

    //Assert
    equal(result, 4 / 2, "Divide 4 / 2 should return 2");
});

test("Divide two equals numbers where the divisor is different than zero", function () {
    //Arrange - Act
    var result = Calculator.divide(3, 3);

    //Assert
    equal(result, 3 / 3, "Divide 3 / 3 should return 1");
});

test("Divide two numbers where the divisor is equal than zero", function () {
    //Arrange - Act
    var result = Calculator.divide(5, 0);

    //Assert
    equal(result, 0, "Divide 5 / 0 should return 0");
});

test("Multiply two equals numbers", function () {
    //Arrange - Act
    var result = Calculator.multiply(2, 2);

    //Assert
    equal(result, 2 * 2, "Multiply 2 * 2 should return 4");
});

test("Multiply two differents numbers", function () {
    //Arrange - Act
    var result = Calculator.multiply(5, 2);

    //Assert
    equal(result, 5 * 2, "Multiply 5 * 2 should return 10");
});

test("Multiply two differents numbers where one is zero", function () {
    //Arrange - Act
    var result = Calculator.multiply(5, 0);

    //Assert
    equal(result, 5 * 0, "Multiply 5 * 0 should return 0");
});


test("Subtract two equals numbers", function () {
    //Arrange - Act
    var result = Calculator.subtract(2, 2);

    //Assert
    equal(result, 2 - 2, "Subtract 2 - 2 should return 0");
});

test("Subtract two differents numbers", function () {
    //Arrange - Act
    var result = Calculator.subtract(5, 2);

    //Assert
    equal(result, 5 - 2, "Subtract 5 - 2 should return 3");
});

test("Subtract two differents numbers where one is zero", function () {
    //Arrange - Act
    var result = Calculator.subtract(5, 0);

    //Assert
    equal(result, 5 - 0, "Subtract 5 - 0 should return 5");
});

test("Subtract two differents numbers where second number is bigger than first", function () {
    //Arrange - Act
    var result = Calculator.subtract(5, 10);

    //Assert
    equal(result, 5 - 10, "Subtract 5 - 10 should return -5");
});