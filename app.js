const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/clinic-router');
const app = express();
const PORT = process.env.PORT || 2000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use('/api/clinic/user', userRouter);

// create server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));