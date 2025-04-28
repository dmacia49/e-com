// scripts/seedProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product'); // adjust if your path is different
const User = require('../models/User');

const MONGO_URI = process.env.MONGO_URI;

const products = [
    {
      name: "Wireless Bluetooth Speaker",
      description: "Compact portable speaker with deep bass and 12-hour playtime.",
      price: 49.99,
      stock: 35,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510203_sd.jpg"
    },
    {
      name: "Noise Cancelling Headphones",
      description: "Over-ear headphones with active noise cancellation and premium sound.",
      price: 129.99,
      stock: 20,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367424_rd.jpg"
    },
    {
      name: "4K UHD Monitor",
      description: "27-inch ultra HD monitor with vibrant colors and crisp resolution.",
      price: 299.99,
      stock: 12,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6583/6583087cv1d.jpg"
    },
    {
      name: "Gaming Mouse",
      description: "Ergonomic gaming mouse with programmable buttons and RGB lighting.",
      price: 39.99,
      stock: 50,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8fc7b3aa-0d45-4523-a697-f91b0f95f5d3.jpg"
    },
    {
      name: "Mechanical Keyboard",
      description: "Tactile keyboard with blue switches and customizable RGB lighting.",
      price: 89.99,
      stock: 25,
      imageUrl: "https://i5.walmartimages.com/seo/Mainstays-LED-Modern-Dimmable-Adjustable-Touch-Sensor-Desk-Lamp_e0721450-797b-4841-b5c4-9acec1a049df_1.8060477738e35b1c0bf40978d9619441.jpeg"
    },
    {
      name: "USB-C Charging Cable",
      description: "Durable nylon-braided 6ft USB-C cable for fast charging.",
      price: 12.99,
      stock: 100,
      imageUrl: "https://m.media-amazon.com/images/I/61zVEKxiAeL._AC_SY355_.jpg"
    },
    {
      name: "Smartwatch",
      description: "Water-resistant smartwatch with heart rate monitoring and GPS.",
      price: 149.99,
      stock: 18,
      imageUrl: "https://m.media-amazon.com/images/I/51bhuWp4FbL._AC_SL1500_.jpg"
    },
    {
      name: "External SSD 1TB",
      description: "High-speed portable solid state drive for backups and storage.",
      price: 109.99,
      stock: 22,
      imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562451cv12d.jpg"
    },
    {
      name: "Wireless Charger Pad",
      description: "Fast wireless charging pad compatible with iPhone and Android.",
      price: 29.99,
      stock: 40,
      imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlxmqXhQQRCzIA_4eRK00M9qAOZEcgY7ael1yVmqkOSZmnW2PDaHTcu3HSt1jvWCDEZH-tvDVl429Db0BzGKUTToMABCfi-nksMkLjrPm-_LGjbkTgCDVIMw"
    },
    {
      name: "Webcam 1080p",
      description: "Full HD webcam with built-in microphone for streaming and meetings.",
      price: 59.99,
      stock: 30,
      imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaX2n3qQQH1BLGlF2tz7u4tzVIBeGrA1RbVa46WRPSbqBWGZx7UcnPYvO8Tvo3wMS0CBA8icE7F0JgmZr8JXRoZjc7SSPWdzwj0-sUYoCC"
    }
  ];

  const user = {name: "UserTest", email: "UserTest@test.com", passwordHash: "12345"};

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // Optional: Clears previous entries
    const result = await Product.insertMany(products);
    const data = await User.insertOne(user);

    console.log("🌱 Seeded products:");
    console.table(result.map(p => ({
      name: p.name,
      price: p.price,
      stock: p.stock,
    })));
    console.log(data);

    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding products:", err);
    mongoose.disconnect();
  }
};

seedProducts();
