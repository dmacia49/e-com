const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET;


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const payload = {
        userId: user._id, // Store user ID in the payload
        email: user.email,
        name: user.name // Optional: You can store other user info as needed
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });


    // Successful login, send user data (you might want to return a JWT token here)
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
exports.signup = async (req, res) => {
  try {
    const { name, email, passwordHash } = req.body;

    if (!name || !email || !passwordHash)
      return res.status(400).json({ message: 'All fields are required' });

    const existingUser = await User.findOne({ email });
    if (existingUser){
      return res.status(400).json({ message: 'User already exists' })};


    const newUser = new User({ name, email, passwordHash });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};