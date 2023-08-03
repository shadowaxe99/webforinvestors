```javascript
import BlockchainModel from '../models/Blockchain';

class BlockchainService {
  static async mintNFT(data) {
    try {
      const mintingResult = await BlockchainModel.mintNFT(data);
      return mintingResult;
    } catch (error) {
      throw error;
    }
  }

  static async verifyNFT(nftId) {
    try {
      const verificationResult = await BlockchainModel.verifyNFT(nftId);
      return verificationResult;
    } catch (error) {
      throw error;
    }
  }

  static async getMintingStatus(nftId) {
    try {
      const status = await BlockchainModel.getMintingStatus(nftId);
      return status;
    } catch (error) {
      throw error;
    }
  }
}

export default BlockchainService;
```