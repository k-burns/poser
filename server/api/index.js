const router = require('express').Router()
module.exports = router

router.use('/poses', require('./poses'))

router.use((req, res, next) => {
  const error = new Error('Route Not Found')
  error.status = 404
  next(error)
})
