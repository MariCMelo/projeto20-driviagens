import express from "express"
import "express-async-errors"
import dotenv from 'dotenv';
import router from './routes/index.js';
import errorHandler from './middleware/error-middleware.js';

dotenv.config()

const app = express()
app.use(express.json())
app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))