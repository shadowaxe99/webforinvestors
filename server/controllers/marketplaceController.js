```javascript
const MarketplaceModel = require('../models/Marketplace');
const { MarketplaceUpdate } = require('../utils/constants');

exports.browseMarketplace = async (req, res) => {
    try {
        const marketplaceItems = await MarketplaceModel.find();
        res.status(200).json(marketplaceItems);
    } catch (error) {
        res.status(500).json({ message: MarketplaceUpdate.ERROR });
    }
};

exports.collectAIPersona = async (req, res) => {
    const { personaId, userId } = req.body;
    try {
        const persona = await MarketplaceModel.findById(personaId);
        if (!persona) {
            return res.status(404).json({ message: MarketplaceUpdate.NOT_FOUND });
        }
        if (persona.owner) {
            return res.status(400).json({ message: MarketplaceUpdate.ALREADY_OWNED });
        }
        persona.owner = userId;
        await persona.save();
        res.status(200).json({ message: MarketplaceUpdate.SUCCESS, persona });
    } catch (error) {
        res.status(500).json({ message: MarketplaceUpdate.ERROR });
    }
};
```