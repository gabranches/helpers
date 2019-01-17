const redis = require('redis')

module.exports = class Cache {
  constructor() {
    if (process.env.REDISCLOUD_URL) {
      this._client = redis.createClient(process.env.REDISCLOUD_URL, {
        no_ready_check: true
      })
    } else {
      this._client = redis.createClient()
    }
  }
  get client() {
    return this._client
  }
  save(key, value) {
    this._client.set(key, value)
    console.log('Saved ' + key)
  }
  saveTemp(key, value, time) {
    this._client.set(key, value, 'EX', time)
    console.log('Saved temp ' + time + ' ' + key)
  }
  delete(key) {
    console.log('Deleted ' + key)
    this._client.del(key)
  }
  load(key) {
    return new Promise((resolve, reject) => {
      this._client.get(key, (err, body) => {
        if (err) reject(err)
        if (!body) {
          console.log(key + ' is empty.')
        } else {
          console.log('Loaded ' + key)
        }
        resolve(body)
      })
    })
  }
  static log(msg) {
    console.log(msg)
  }
}
