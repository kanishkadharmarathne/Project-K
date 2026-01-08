require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');

const app = express();

//Middleware
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();

});

//Routes
app.use('/api/workouts', workoutRoutes);

//conect to DB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

