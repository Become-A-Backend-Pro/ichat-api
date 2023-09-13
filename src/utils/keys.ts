import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT || 5001,
  mongoose: {
    connectUrl: process.env.MONGO_CONNECT_URL || ''
  }
}
