require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


// Connection to DB and Listen PORT
mongoose.connect(process.env.DB_HOST)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Backend running on port`, process.env.PORT);
    });
    console.log('Connected to MongoDB');
  }).catch(() => {
    console.log(error);
  });

    //Middlewares
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

