```javascript
const mongoose = require('mongoose');

const BlockchainSchema = new mongoose.Schema({
    mintingStatus: {
        type: String,
        required: true,
        enum: ['pending', 'in-progress', 'completed', 'failed']
    },
    mintingProcess: {
        type: String,
        required: true
    },
    verification: {
        type: Boolean,
        default: false
    },
    aiAgent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AI'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const BlockchainModel = mongoose.model('Blockchain', BlockchainSchema);

module.exports = BlockchainModel;
```