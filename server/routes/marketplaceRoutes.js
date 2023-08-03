```javascript
const express = require('express');
const router = express.Router();
const marketplaceController = require('../controllers/marketplaceController');

// Route to get all AI personas in the marketplace
router.get('/', marketplaceController.getAllAIPersonas);

// Route to get a specific AI persona by ID
router.get('/:id', marketplaceController.getAIPersonaById);

// Route to purchase an AI persona
router.post('/purchase/:id', marketplaceController.purchaseAIPersona);

// Route to collect a limited edition AI persona
router.post('/collect/:id', marketplaceController.collectAIPersona);

module.exports = router;
```