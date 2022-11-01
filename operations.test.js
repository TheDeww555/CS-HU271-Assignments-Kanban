// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line
const {subtract} = require('./operations')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});


//testing subtraction
test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1)
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1)
});

test('subtracts 5 - (-5) to equal 10', () => {
    expect(subtract(5, -5)).toBe(10)
});

test('subtracts (-5) - 5 to equal -10', () => {
    expect(subtract(-5, 5)).toBe(-10)
});


//testing division
test('divides 5 / 5 to equal 1', () => {
    expect(divide(5, 5)).toBe(1)
});

test('divides 15 / 5 to equal 3', () => {
    expect(divide(15, 5)).toBe(3)
});

test('divides -15 / 5 to equal -3', () => {
    expect(divide(-15, 5)).toBe(-3)
});
test('divides 15 / 0 to equal error', () => {
    expect(divide(15, 0)).toBe(error)
});
