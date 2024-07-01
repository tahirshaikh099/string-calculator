const stringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(stringCalculator('1')).toBe(1);
    expect(stringCalculator('5')).toBe(5);
});

test('returns the sum of two numbers', () => {
    expect(stringCalculator('1,2')).toBe(3);
});

test('returns the sum of numbers with new lines', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
});

test('throws an error for negative numbers', () => {
    expect(() => stringCalculator('1,-2,3')).toThrow('negatives not allowed: -2');
});

test('ignores numbers greater than 1000', () => {
    expect(stringCalculator('2,1001')).toBe(2);
});

test('supports custom delimiters', () => {
    expect(stringCalculator('//;\n1;2')).toBe(3);
    expect(stringCalculator('//#\n1#2#3')).toBe(6);
});

test('supports multiple delimiters', () => {
    expect(stringCalculator('//;\n1;2\n3,4')).toBe(10);
});
