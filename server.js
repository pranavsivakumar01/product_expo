const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); 


mongoose.connect('mongodb://localhost:27017/userDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String
});
const User = mongoose.model('User', userSchema);


app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is runnig");
});