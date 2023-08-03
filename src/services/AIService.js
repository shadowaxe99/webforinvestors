```javascript
import axios from 'axios';
import { AIModel } from '../models/AI';

export class AIService {
  constructor() {
    this.aiModel = new AIModel();
  }

  async interactWithAI(userInput) {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: userInput,
        max_tokens: 60
      });

      if (response.data && response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].text;
      } else {
        throw new Error('AI response not received');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async saveInteractionHistory(userId, userInput, aiResponse) {
    try {
      const interaction = {
        userId,
        userInput,
        aiResponse,
        timestamp: new Date()
      };

      await this.aiModel.saveInteraction(interaction);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
```