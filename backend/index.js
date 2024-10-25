const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS middleware
const ruleRoutes = require('./routes/ruleRoutes');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect('mongodb+srv://nirbhaysingh9029909678:Nirbhay%409628@cluster0.mn4ea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/rules', ruleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
