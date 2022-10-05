const Calculator = require('./task3.js');

const calc = new Calculator;

describe('calculator', () => {
  test('add two numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
  })
  test('subtract two numbers', () => {
    expect(calc.subtract(80, 78)).toBe(2);
  })
  test('multiply two numbers', () => {
    expect(calc.multiply(15, 2)).toBe(30);
  })
  test('divide two numbers', () => {
    expect(calc.divide(30, 2)).toBe(15);
  })
})