import userRouter from '#Routes/user.route.js';
import express from 'express';

const App = express();

// Middleware
App.use(express.json());

// Routes
App.use('/api/user', userRouter);



export default App;