import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'
import listingsRoutes from './routes/listings.js'
import loansRoutes from './routes/loans.js'
import userRoutes from './routes/user.js'
import authMiddleware from './middlewares/auth.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL ?? 'http://localhost:5173', credentials: true }));

app.use('/auth', authRoutes);
app.use('/listings', authMiddleware, listingsRoutes);
app.use('/loans', authMiddleware, loansRoutes);
app.use('/users', authMiddleware, userRoutes);

app.get('/', (_req, res) => res.json({ status: 'ok' }));

export default app
