/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world!',
  }
})

// Return plain text "hello"
router.get('/hello', async ({ response }) => {
  response.type('text/plain').send('hello')
})

// Return the current time as an ISO string
router.get('/time', async () => {
  return {
    time: new Date().toISOString(),
  }
})

// Return all environment variables (warning: may include secrets)
router.get('/env', async () => {
  // Clone to a plain object for JSON serialization
  return Object.fromEntries(Object.entries(process.env))
})
