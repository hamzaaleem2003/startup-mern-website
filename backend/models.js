const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  comments: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = { Feedback };