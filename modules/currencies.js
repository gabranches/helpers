const numbers = require('./numbers')
const self = {}

self.format = (num, code = 'USD') => {
  const numReadable = numbers.format(num)
  const numSats = numbers.format(num / 100000000)
  if (num === 0) { return '-'}
  if (code === 'USD') return '$' + numReadable
  if (code === 'EUR') return '€' + numReadable
  if (code === 'BTC') return '₿' + numReadable
  if (code === 'sat') return numSats + ' sat.'
  return numReadable + ' ' + code
}

module.exports = self
