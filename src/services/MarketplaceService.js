```javascript
import axios from 'axios';
import { MarketplaceModel } from '../models/Marketplace';

class MarketplaceService {
  static async getMarketplaceItems() {
    try {
      const response = await axios.get('/api/marketplace');
      return response.data;
    } catch (error) {
      console.error('Error fetching marketplace items', error);
      throw error;
    }
  }

  static async purchaseAIPersona(id, userId) {
    try {
      const response = await axios.post(`/api/marketplace/purchase/${id}`, { userId });
      return response.data;
    } catch (error) {
      console.error('Error purchasing AI persona', error);
      throw error;
    }
  }

  static async collectAIPersona(id, userId) {
    try {
      const response = await axios.post(`/api/marketplace/collect/${id}`, { userId });
      return response.data;
    } catch (error) {
      console.error('Error collecting AI persona', error);
      throw error;
    }
  }

  static async addAIPersonaToMarketplace(aiPersona) {
    try {
      const newAIPersona = new MarketplaceModel(aiPersona);
      const response = await axios.post('/api/marketplace/add', newAIPersona);
      return response.data;
    } catch (error) {
      console.error('Error adding AI persona to marketplace', error);
      throw error;
    }
  }
}

export default MarketplaceService;
```