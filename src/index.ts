import express, { Express, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import keys from '~/utils/keys'
import routes from '~/routes'
import logging from './utils/logging'

const app: Express = express()

const NAMESPACE = 'index.ts'

// SETTINGS middleware
app.use(helmet())
app.use(morgan('common'))

// SET API Routes
app.use('/api', routes)

// CREATE SERVER
try {
  app.listen(keys.port, () => {
    logging.info(NAMESPACE, 'Server is running..')
  })
} catch (error) {
  logging.error(NAMESPACE, `${error}`)
}
