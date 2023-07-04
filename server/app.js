const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const userModel = require('./userModel');

dotenv.config({ path: './server.env' });
app.use(bodyParser.json());
app.use(cors());

// use multer to handle the file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files/'); // the destination folder for the uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//
const upload = multer({ storage: storage });

// post request for candidate root
app.post('/candidate', upload.single('file'), async (req, res) => {
  try {
    // combine the user object and file path to create a new user object and store it in the database
    const user = { ...req.body, cv: req.file.path };
    const newUser = await userModel.create(user);

    res
      .status(200)
      .json({ message: 'Your request submitted successfully', newUser });
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
