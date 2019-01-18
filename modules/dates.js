const self = {}

self.formatDefault = timestamp => {
  const date = new Date(timestamp)
  return date.toString()
}

module.exports = self
