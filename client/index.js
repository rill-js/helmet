'use strict'

// All helmet middlewares are a noops in the browser.
module.exports = helmet
helmet.contentSecurityPolicy =
helmet.dnsPrefetchControl =
helmet.frameguard =
helmet.hidePoweredBy =
helmet.hpkp =
helmet.hsts =
helmet.ieNoOpen =
helmet.noCache =
helmet.noSniff =
helmet.referrerPolicy =
helmet.xssFilter = noop

// Does nothing
function helmet () {}
function noop () {}
