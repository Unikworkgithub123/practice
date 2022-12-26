require('dotenv').config();

const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors')

const app = express();
const upload = multer();

app.use(cors())
app.use(upload.any());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


module.exports = app
