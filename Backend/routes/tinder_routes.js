import express from 'express'
import {getProfiles, createProfile, deleteProfile} from '../controllers/profiles.js'
// import profiles from '../models/profiles.js'

const router = express.Router()

router.get('/', getProfiles )
router.post('/', createProfile )
router.delete('/:id', deleteProfile)

export default router