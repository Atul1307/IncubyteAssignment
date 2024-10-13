import { add } from './calculator.js';

describe('String Calculator - add function', () => {
  test('should return 0 for empty input', () => {
    const result = add('');
    expect(result).toBe(0);
  });

  test('should return correct sum for default delimiters', () => {
    const result = add('1,2,3');
    expect(result).toBe(6);

    const resultWithNewLine = add('1\n2,3');
    expect(resultWithNewLine).toBe(6);
  });

  test('should handle custom delimiter', () => {
    const result = add('//;\n1;2;3');
    expect(result).toBe(6);
  });

  test('should return error message for negative numbers', () => {
    const result = add('//;\n1;-2;3;-5');
    expect(result).toBe('Negative numbers are not allowed: -2, -5');
  });
  test('should handle non-numeric input gracefully', () => {
    expect(() => add('1,a,3')).toThrow(
      'Invalid input: Non-numeric value detected'
    );
  });
  test('should return correct sum for large numbers', () => {
    const result = add('1000,2000,3000');
    expect(result).toBe(6000);
  });
  test('should handle multiple custom delimiters', () => {
    const result = add('//[;][%]\n1;2%3');
    expect(result).toBe(6);
  });
  test('should handle delimiters of any length', () => {
    const result = add('//[***]\n1***2***3');
    expect(result).toBe(6);
  });
  test('should handle multiple newlines as valid delimiters', () => {
    const result = add('1\n2\n3');
    expect(result).toBe(6);
  });
  test('should handle input ending with a delimiter', () => {
    const result = add('1,2,3,');
    expect(result).toBe(6);
  });
});
