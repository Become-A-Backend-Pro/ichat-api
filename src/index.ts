import express, { Express } from 'express'
import morgan from 'morgan'
import keys from '~/utils/keys'
import { responseEnhancer } from './middlewares/express-formatter'
import routes from './routes'
import logging from './utils/logging'

const app: Express = express()

const NAMESPACE = 'index.ts'

// SETTINGS middleware
// app.use(helmet())
app.use(morgan('dev'))
// Formatter response express middleware for node.js
app.use(responseEnhancer())

// SET API Routes
app.use('/api', routes)

// CREATE SERVER
try {
  app.listen(keys.port, () => {
    logging.info(NAMESPACE, `Server is running on port: http://localhost:${keys.port}`)
  })
  // database.createConnection()
} catch (error) {
  logging.error(NAMESPACE, `${error}`)
}
