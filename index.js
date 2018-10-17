if (process.env.NODE_ENV === 'development') {
  // Entry point for enabling babel-register while development.
  require('@babel/register')
  require('@babel/polyfill')
  require('./server')
} else {
  // Use transpiled source at production.
  require('./dist')
}
