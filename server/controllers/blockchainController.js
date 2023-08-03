```javascript
const BlockchainModel = require('../models/Blockchain');

exports.startMinting = async (req, res) => {
    try {
        const { aiId } = req.body;
        const mintingStatus = await BlockchainModel.mintNFT(aiId);
        res.status(200).json({ message: 'Minting started', mintingStatus });
    } catch (error) {
        res.status(500).json({ message: 'Error starting minting process', error });
    }
};

exports.getMintingStatus = async (req, res) => {
    try {
        const { aiId } = req.params;
        const mintingStatus = await BlockchainModel.getMintingStatus(aiId);
        res.status(200).json({ message: 'Minting status fetched', mintingStatus });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching minting status', error });
    }
};

exports.verifyNFT = async (req, res) => {
    try {
        const { aiId } = req.params;
        const verificationStatus = await BlockchainModel.verifyNFT(aiId);
        res.status(200).json({ message: 'NFT verification status fetched', verificationStatus });
    } catch (error) {
        res.status(500).json({ message: 'Error verifying NFT', error });
    }
};
```