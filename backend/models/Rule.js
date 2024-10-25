const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  rule: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Rule', ruleSchema);