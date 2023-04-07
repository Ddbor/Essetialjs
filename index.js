'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/essetialjs.cjs.min.js')
} else {
  module.exports = require('./dist/essetialjs.cjs.js')
}
