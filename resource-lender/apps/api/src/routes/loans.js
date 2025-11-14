import { Router } from 'express'
import { getLoan, returnLoan } from '../controllers/loans.controller.js'

const router = Router()
router.post('/getLoan', getLoan);
router.delete('/returnLoan', returnLoan);

export default router
