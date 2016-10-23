<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/helmet
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/helmet">
    <img src="https://img.shields.io/npm/v/@rill/helmet.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/helmet">
    <img src="https://img.shields.io/npm/dm/@rill/helmet.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

A wrapper for [helmet]() that works with Rill.

Helmet helps you secure your app by setting various HTTP headers.

## Installation

```console
npm install @rill/helmet
```

## Example

You can use the default settings.

```javascript
const app = require('rill')()
const helmet = require('@rill/helmet')

app.use(helmet())
```

Or use individual middleware.

```javascript
app.use(helmet.noCache())
app.use(helmet.frameguard())
```

## How it works

Helmet is a collection of 11 smaller middleware functions that set HTTP headers. Running `app.use(helmet())` will not include all of these middleware functions by default.

| Module | Default? |
|---|---|
| [contentSecurityPolicy](https://github.com/helmetjs/csp) for setting Content Security Policy |  |
| [dnsPrefetchControl](https://github.com/helmetjs/dns-prefetch-control) controls browser DNS prefetching | ✓ |
| [frameguard](https://github.com/helmetjs/frameguard) to prevent clickjacking | ✓ |
| [hidePoweredBy](https://github.com/helmetjs/hide-powered-by) to remove the X-Powered-By header | ✓ |
| [hpkp](https://github.com/helmetjs/hpkp) for HTTP Public Key Pinning |  |
| [hsts](https://github.com/helmetjs/hsts) for HTTP Strict Transport Security | ✓ |
| [ieNoOpen](https://github.com/helmetjs/ienoopen) sets X-Download-Options for IE8+ | ✓ |
| [noCache](https://github.com/helmetjs/nocache) to disable client-side caching |  |
| [noSniff](https://github.com/helmetjs/dont-sniff-mimetype) to keep clients from sniffing the MIME type | ✓ |
| [referrerPolicy](https://github.com/helmetjs/referrer-policy) to hide the Referer header |  |
| [xssFilter](https://github.com/helmetjs/x-xss-protection) adds some small XSS protections | ✓ |

For a more in depth guide on how to use @rill/helmet check out the official guide for helmet [here](https://github.com/helmetjs/helmet#user-content-usage-guide).

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
