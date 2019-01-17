const self = {}

self.addCommas = x => {
  if (isNaN(x)) return Error(x + ' is not a number.')
  const xString = x.toString()
  const xArray = xString.split('.')
  let whole = xArray[0]
  whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (xArray.length === 1) return whole
  const decimal = xArray[1]
  return whole + '.' + decimal
},

self.readable = (val, precision = 3) => {
  let num = parseFloat(val)
  let wholeNum = Math.round(val)
  if (num === 0) {
    return 0
  }
  if (val < 1000) {
    return num.toPrecision(precision)
  }
  if (val < 1000000) {
    return self.addCommas(wholeNum)
  }
  if (val < 1000000000) {
    return (wholeNum / 1000000).toPrecision(precision) + 'M'
  }
  if (val < 1000000000000) {
    return (wholeNum / 1000000000).toPrecision(precision) + 'B'
  }
  if (val < 1000000000000000) {
    return (wholeNum / 1000000000000).toPrecision(precision) + 'T'
  }
}

module.exports = self