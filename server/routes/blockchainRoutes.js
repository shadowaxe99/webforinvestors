```javascript
const express = require('express');
const router = express.Router();
const blockchainController = require('../controllers/blockchainController');

// Route to start the minting process
router.post('/startMinting', blockchainController.startMinting);

// Route to get the status of the minting process
router.get('/mintingStatus', blockchainController.getMintingStatus);

// Route to verify the minted NFT
router.get('/verifyNFT/:nftId', blockchainController.verifyNFT);

module.exports = router;
```