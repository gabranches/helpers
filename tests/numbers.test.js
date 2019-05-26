const numbers = require('../index').numbers;

describe('numbers', () => {
  describe('addCommas', () => {
    it('should add commas in the right places', () => {
      expect(numbers.addCommas(1000000)).toBe('1,000,000');
      expect(numbers.addCommas(1000000000)).toBe('1,000,000,000');
      expect(numbers.addCommas(1000)).toBe('1,000');
      expect(numbers.addCommas(1000.123123)).toBe('1,000.123123');
      expect(numbers.addCommas('1000000')).toBe('1,000,000');
      expect(numbers.addCommas(0)).toBe('0');
      expect(numbers.addCommas(0.1234123423)).toBe('0.1234123423');
    });
    it('should output a string', () => {
      expect(typeof numbers.addCommas(1000000)).toBe('string');
    });
  });
  describe('format', () => {
    it('should follow the default guidelines', () => {
      expect(numbers.format(0)).toBe('0');
      expect(numbers.format(0, {dashedZero: true})).toBe('-');
      expect(numbers.format(0.00123)).toBe('0.00123');
      expect(numbers.format(0.0123)).toBe('0.0123');
      expect(numbers.format(0.123)).toBe('0.123');
      expect(numbers.format(8.123)).toBe('8.12');
      expect(numbers.format(98.123)).toBe('98.1');
      expect(numbers.format(998.123)).toBe('998');
      expect(numbers.format(9988.123)).toBe('9,988');
      expect(numbers.format(9987.923)).toBe('9,988');
      expect(numbers.format(12345.123412)).toBe('12,345');
      expect(numbers.format(123456.123412)).toBe('123,456');
      expect(numbers.format(1234567.123412)).toBe('1.23M');
      expect(numbers.format(12345678.123412)).toBe('12.3M');
      expect(numbers.format(123456789.123412)).toBe('123M');
      expect(numbers.format(1234567890.123412)).toBe('1.23B');
      expect(numbers.format(12345678901.123412)).toBe('12.3B');
      expect(numbers.format(123456789012.123412)).toBe('123B');
      expect(numbers.format(1234567890123.123412)).toBe('1.23T');
    });
  });
});
