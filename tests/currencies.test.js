const currencies = require('../index').currencies;

describe("currencies", () => {
  describe("format", () => {
    it("should apply the correct currency symbol to the number", () => {
      expect(currencies.format(1000000, "USD")).toBe("$1.00M");
      expect(currencies.format(1000000)).toBe("$1.00M");
      expect(currencies.format(123.141, "EUR")).toBe("€123");
      expect(currencies.format(1.2345, "BTC")).toBe("₿1.23");
    });
  });
});
