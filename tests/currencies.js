const assert = require('assert')
const currencies = require('../index').currencies

module.exports = () => {
  describe('currencies', () => {
    describe('apply', () => {
      it('should apply the correct currency symbol to the number', () => {
        assert.equal('$1.00M', currencies.apply(1000000, 'USD'))
        assert.equal('$1.00M', currencies.apply(1000000))
        assert.equal('€123', currencies.apply(123.141, 'EUR'))
        assert.equal('₿1.23', currencies.apply(1.2345, 'BTC'))
      })
    })
  })
}