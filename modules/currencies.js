const numbers = require('./numbers')
const self = {}

self.formatDefault = (num, code = 'USD') => {
  const numReadable = numbers.formatDefault(num)
  const numSats = numbers.formatDefault(num / 100000000)
  if (code === 'USD') return '$' + numReadable
  if (code === 'EUR') return '€' + numReadable
  if (code === 'BTC') return '₿' + numReadable
  if (code === 'sat') return numSats + ' sat.'
  return numReadable + ' ' + code
}

module.exports = self
