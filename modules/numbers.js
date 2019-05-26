const self = {};

(self.addCommas = x => {
  if (isNaN(x)) return Error(x + ' is not a number.');
  const xString = x.toString();
  const xArray = xString.split('.');
  let whole = xArray[0];
  whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (xArray.length === 1) return whole;
  const decimal = xArray[1];
  return whole + '.' + decimal;
}),
  (self.format = (val, options = {}) => {
    let num = Number.parseFloat(val);
    let wholeNum = Math.round(val);
    let precision = options.precision || 3;

    if (num === 0) {
      if (options.dashedZero === true) return '-';
      return '0';
    }
    if (num <= 0.0001) {
      return num.toExponential(1);
    }
    if (val >= 0.1 && val < 100) {
      if (options.currency) return num.toFixed(2);
    }
    if (val < 1000) {
      return num.toPrecision(precision);
    }
    if (val < 1000000) {
      return self.addCommas(wholeNum);
    }
    if (val < 1000000000) {
      return (wholeNum / 1000000).toPrecision(precision) + 'M';
    }
    if (val < 1000000000000) {
      return (wholeNum / 1000000000).toPrecision(precision) + 'B';
    }
    if (val < 1000000000000000) {
      return (wholeNum / 1000000000000).toPrecision(precision) + 'T';
    }
  });

self.formatPercent = (val, decimals = 2) => {
  if (val === 0) {
    return '-';
  }
  return parseFloat(val).toFixed(decimals) + '%';
};

module.exports = self;
