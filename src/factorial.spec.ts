import { factorial } from './factorial';

describe('factorial function', () => {
  it('should return 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 24 for factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should return 3_628_800 for factorial of 10', () => {
    expect(factorial(10)).toBe(3_628_800);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => factorial(-228)).toThrow(
      'Factorial is not defined for negative numbers',
    );
  });
});
