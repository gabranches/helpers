const numbers = require('./numbers')
const self = {}

self.apply = (num, code = 'USD') => {
  const numReadable = numbers.readable(num)
  const numSats = numbers.readable(num / 100000000)
  if (code === 'USD') return '$' + numReadable
  if (code === 'EUR') return '€' + numReadable
  if (code === 'BTC') return '₿' + numReadable
  if (code === 'sat') return numSats + ' sat.'
  return numReadable + ' ' + code
}

module.exports = self
