```javascript
const express = require('express');
const aiController = require('../controllers/aiController');
const router = express.Router();

// Route to interact with AI
router.post('/interact', aiController.interactWithAI);

// Route to start minting process
router.post('/mint', aiController.startMinting);

module.exports = router;
```