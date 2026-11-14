import express from 'express'
import logMiddleware from '../middleware/log.middleware.js' 

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'

import JadwalController from '../controllers/jadwal.controller.js' 

const router = express.Router()
router.use(logMiddleware)

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.get('/jadwalkuliah', JadwalController.index);
router.get('/jadwalkuliah/:id', JadwalController.show);
router.post('/jadwalkuliah', JadwalController.store);
router.put('/jadwalkuliah/:id', JadwalController.update);
router.delete('/jadwalkuliah/:id', JadwalController.delete);

export default router
