import express from 'express'
import FreePass from '../controllers/free_pass'
import { secureRoute } from '../helpers/'
import multerUploads from '../helpers/multer'
import uploadFile from '../helpers/upload'
const router = express.Router()

router.route('/').get(secureRoute, FreePass.listAndUsage)
router.route('/add').post(secureRoute, FreePass.add)
router
  .route('/upload/:id')
  .put(secureRoute, multerUploads, uploadFile, FreePass.assignImage)
router.route('/block/:id').put(secureRoute, FreePass.block)
router.route('/unblock/:id').put(secureRoute, FreePass.unblock)

module.exports = router
