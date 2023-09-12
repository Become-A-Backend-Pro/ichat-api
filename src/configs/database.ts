import mongoose from 'mongoose'
import keys from '~/utils/keys'
import logging from '~/utils/logging'

const NAMESPACE = 'config/database'

const createConnection = async () => {
  try {
    await mongoose
      .connect(keys.mongoose.connectUrl)
      .then((_) => {
        logging.info(NAMESPACE, 'Mongoose connection successfully 👏')
      })
      .catch((error) => {
        logging.error(NAMESPACE, `Mongoose connection failed with error: ${error}`)
      })
  } catch (error) {
    logging.error(NAMESPACE, `DB connection failed with error: ${error}`)
  }
}

mongoose.connection.on('connected', () => {
  logging.info(NAMESPACE, 'Mongoose is enable connection..')
})

mongoose.connection.on('error', (err) => {
  logging.info(NAMESPACE, `Mongoose connection with error: ${err}`)
})

mongoose.connection.on('disconnected', () => {
  logging.info(NAMESPACE, 'Mongoose is disconnected')
})

// Auto close connect to db when stop the server
process.on('SIGINT', async () => {
  await mongoose.connection
    .close()
    .then(() => logging.info(NAMESPACE, 'Server disabled mongoose connection!'))
    .catch((err) => logging.info(NAMESPACE, `Server disabled mongoose connection failed with error: ${err}`))

  process.exit(0)
})

export default {
  createConnection
}
