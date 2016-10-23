'use strict'

var helmet = require('helmet')

/**
 * Middleware for using the default options with https://github.com/helmetjs/helmet.
 *
 * @param {Object} opts
 * @return {Function}
 */
module.exports = function helmetSetup (opts) {
  // Convert regular helmet express middleware to be rill compatible.
  return rillToExpress(helmet(opts))
}

// Expose the rest of the helmet middleware as rill middleware.
Object.keys(helmet).forEach(function (method) {
  var middleware = helmet[method]
  module.exports[method] = function helmetMethod (opts) {
    // Convert regular helmet express middleware to be rill compatible.
    return rillToExpress(middleware(opts))
  }
})

/**
 * Converts an express style middleware into a promise.
 *
 * @param {Function} middleware
 * @return {Function}
 */
function rillToExpress (middleware) {
  return function (ctx, next) {
    return new Promise(function (resolve, reject) {
      middleware(ctx.req.original, ctx.res.original, function (err) {
        if (err) reject(err)
        else resolve(next())
      })
    })
  }
}
