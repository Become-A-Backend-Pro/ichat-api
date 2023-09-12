import { NextFunction, Request, Response, Router } from 'express'
import logEvent from '~/helpers/log-event'
import logging from '~/utils/logging'
import userRoutes from '~/routes/user.route'

const router = Router()

const NAMESPACE = 'routes/index'

router.use('/users', userRoutes)

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logEvent(err.message)
  logging.error(NAMESPACE, 'Wrong route with error: ' + res.statusMessage)
  return res.status(500).send(err.message).json({ status: 500, message: err.message }).end()
})

export default router
