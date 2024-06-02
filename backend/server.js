import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import devToolRoutes from './routes/devTool.routes.js';

import connectToMongoDB from './db/connectToMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();


// MiddleWare
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dev', devToolRoutes)

app.get('/', (req, res)=> {
    res.send("API is running.")
})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server started on port ${PORT}.`)
} );
