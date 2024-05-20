import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();


// MiddleWare
app.use('/api/auth', authRoutes)

app.use(express.json());

app.get('/', (req, res)=> {
    res.send("API is running.")
})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server started on port ${PORT}.`)
} );
