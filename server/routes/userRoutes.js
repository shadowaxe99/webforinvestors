```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get user profile
router.get('/profile/:id', userController.getUserProfile);

// Route to update user profile
router.put('/profile/:id', userController.updateUserProfile);

// Route to get user's AI-NFT interaction history
router.get('/history/:id', userController.getUserHistory);

// Route to get user's minted AI-NFTs
router.get('/minted/:id', userController.getUserMinted);

module.exports = router;
```