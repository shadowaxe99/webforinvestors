const mongoose = require('mongoose');

const AISchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capabilities: {
    type: [String],
    required: true
  },
  minted: {
    type: Boolean,
    default: false
  },
  mintingHistory: [{
    date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['Started', 'In Progress', 'Completed', 'Failed'],
      default: 'Started'
    }
  }],
  interactionHistory: [{
    date: {
      type: Date,
      default: Date.now
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    message: {
      type: String
    }
  }]
});

const AIModel = mongoose.model('AI', AISchema);

module.exports = AIModel;