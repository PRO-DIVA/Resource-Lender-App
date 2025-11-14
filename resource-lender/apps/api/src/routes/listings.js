import { Router } from 'express'
import { createListing, fetchListings, fetchSpecificListing } from '../controllers/listing.controller.js'

const router = Router()
router.post('/createlisting', createListing);
router.get('/', fetchListings);
router.get('/:id', fetchSpecificListing);

export default router
