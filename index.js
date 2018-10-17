const dev = process.env.NODE_ENV !== 'production'

if (dev) {
  // Entry point for enabling babel-register while development.
  require('@babel/register')
  require('@babel/polyfill')
  require('./server')
} else {
  // Use transpiled source at production.
  require('./dist')
}
