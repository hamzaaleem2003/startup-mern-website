const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv'); // Load environment variables
const { Feedback } = require('./models');

dotenv.config(); // Load environment variables from a .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the application on database connection failure
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// API route for saving feedback
app.post('/api/save-feedback', async (req, res) => {
  try {
    const existingFeedback = await Feedback.findOne({ email: req.body.email });

    if (existingFeedback) {
      return res.status(400).send("Feedback with the same email address already submitted.");
    }

    const feedback = new Feedback(req.body);
    await feedback.save();
    
    await transporter.sendMail({
      to: process.env.EMAIL_USER,
      subject: 'New Feedback Submitted',
      text: `
        Feedback details:
        Name: ${feedback.name}
        Email: ${feedback.email}
        Subject: ${feedback.subject}
        Comments: ${feedback.comments}
      `,
    });
   

    res.status(201).send(feedback);
    
      
    
  } catch (error) {
    console.error('Error saving feedback and sending email:', error);
    res.status(400).send(error);
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
