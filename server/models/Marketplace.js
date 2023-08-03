```javascript
const mongoose = require('mongoose');

const MarketplaceSchema = new mongoose.Schema({
    aiPersona: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

const MarketplaceModel = mongoose.model('Marketplace', MarketplaceSchema);

module.exports = MarketplaceModel;
```