const Calculator = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two positive numbers correctly', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('should add two negative numbers correctly', () => {
        expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add a positive and a negative number correctly', () => {
        expect(calculator.add(5, -3)).toBe(2);
    });

    test('should add zero correctly', () => {
        expect(calculator.add(5, 0)).toBe(5);
        expect(calculator.add(0, 5)).toBe(5);
    });
});