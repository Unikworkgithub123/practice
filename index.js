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

// import routes 
// const userRoutes = require('./routes/user.route')
// const projectRoutes = require('./routes/project.route')
// const taskRoutes = require('./routes/task.route')

// app.use('/api/v1/user', userRoutes)
// app.use('/api/v1/project', projectRoutes)
// app.use('/api/v1/task', taskRoutes)

module.exports = app
