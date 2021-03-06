const currencies = require('../index').currencies;

describe("currencies", () => {
  describe("format", () => {
    it("should apply the correct currency symbol to the number", () => {
      expect(currencies.format(0.001234, "USD")).toBe("$0.00123");
      expect(currencies.format(0.01234, "USD")).toBe("$0.0123");
      expect(currencies.format(0.1234, "USD")).toBe("$0.123");
      expect(currencies.format(1, "USD")).toBe("$1.00");
      expect(currencies.format(1.234, "USD")).toBe("$1.23");
      expect(currencies.format(12.3, "USD")).toBe("$12.30");
      expect(currencies.format(12, "USD")).toBe("$12.00");
      expect(currencies.format(123, "USD")).toBe("$123");
      expect(currencies.format(1000000, "USD")).toBe("$1.00M");
      expect(currencies.format(1000000)).toBe("$1.00M");
      expect(currencies.format(123.141, "EUR")).toBe("€123");
      expect(currencies.format(1.2345, "BTC")).toBe("₿1.23");
    });
  });
});
