```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  aiNFTs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AI'
  }],
  interactionHistory: [{
    aiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AI'
    },
    interaction: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
```