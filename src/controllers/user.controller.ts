import { NextFunction, Request, Response } from 'express'
import logEvent from '~/helpers/log-event'
import logging from '~/utils/logging'

const NAMESPACE = 'controller/user'

export const createNew = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.formatter.created('ok')
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    res.formatter.badRequest(error)
  }
}

export const getByID = async (req: Request, res: Response, next: NextFunction) => {}

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logEvent('This is error')
    logging.info(NAMESPACE, `This is info`)
    logging.warn(NAMESPACE, `This is warn`)
    logging.error(NAMESPACE, `This is error`)
    logging.debug(NAMESPACE, `This is debug`)
    return res.formatter.ok('getAll')
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    return res.formatter.badRequest(error)
  }
}

export const updateByID = async (req: Request, res: Response, next: NextFunction) => {}

export const deleteByID = async (req: Request, res: Response, next: NextFunction) => {}
