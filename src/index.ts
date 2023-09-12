import express, { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from '~/routes'
import keys from '~/utils/keys'
import database from './configs/database'
import { responseEnhancer } from './middlewares/express-formatter'
import logging from './utils/logging'

const app: Express = express()

const NAMESPACE = 'index.ts'

// SETTINGS middleware
app.use(helmet())
app.use(morgan('common'))
// Formatter response express middleware for node.js
app.use(responseEnhancer())

// SET API Routes
app.use('/api', routes)

// CREATE SERVER
try {
  app.listen(keys.port, () => {
    logging.info(NAMESPACE, `Server is running..`)
  })
  database.createConnection()
} catch (error) {
  logging.error(NAMESPACE, `${error}`)
}
