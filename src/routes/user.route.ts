import { Router } from 'express'
import * as controller from '~/controllers/user.controller'

const router = Router()

router.post('/', controller.createNew)
router.get('/find', controller.getAll)
router.get('/:id', controller.getByID)
router.put('/', controller.updateByID)
router.delete('/:id', controller.deleteByID)

export default router
