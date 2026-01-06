require('dotenv').config();

const express = require('express');

const app = express();

//Middleware
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();

});

//Routes
app.get('/', (req, res) => {
    res.json('Hello, World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});