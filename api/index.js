const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 2000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://minh:minh@cluster0.ch9fgmk.mongodb.net/').then(()=>{
    console.log('connect success');
}).catch((err)=>{
    console.log('connect fail')
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

