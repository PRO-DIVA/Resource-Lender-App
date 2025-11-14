import { Router } from 'express'
import { createListing, fetchListings, fetchSpecificListing, searchListings} from '../controllers/listing.controller.js'

const router = Router()
router.post('/createlisting', createListing);
router.get('/', fetchListings);
router.get('/search', searchListings);
router.get('/:id', fetchSpecificListing);

export default router
