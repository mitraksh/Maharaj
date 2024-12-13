require('dotenv').config()
const express = require('express');
const app = express();
const db = require('./db/connect')
// const router = require('./components')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fs = require('fs');
const photoModel = require('./models/photos');
const { Blob } = require('node:buffer');

app.use(express.static('images'));

app.use(
  cors({
    origin: '*',
    credentials: true,
    exposedHeaders: ['Set-Cookie', 'X-Total-Count']
  })
)
app.use(express.json())
app.use(cookieParser())

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Credentials', true)
  next()
});

app.get('/', (req, res) => {
  try {
    // const getPhotos = async () => {
    //   const results = await photoModel.getAllPhotos();
    //   console.log(results[0].dataValues.photoFile) 
    //   res.send(results[0].dataValues.photoFile)
    // }
    // getPhotos()

  //   const reader = fs.createReadStream('/Users/mitraksh/Documents/images/Screenshots/backinstockEmail.png');
  //   reader.on('data', function (chunk) {
  //     console.log(chunk);
  // });

  const uploadPhoto = req.body;
  console.log(uploadPhoto)
  res.send(uploadPhoto)
  } catch (e) {
    res.send(e)
  }
})

// app.use('/api/v1/', router)

const startApp = () => {
    try {
        const PORT = process.env.PORT || 4000;
        console.log('db')
        db.authenticate()
        console.log('DB Connected')
        app.listen(PORT, console.log(`Server started at ${PORT}`));
    } catch (error) {
        console.error('Error: ' + error);
    }
}
startApp();