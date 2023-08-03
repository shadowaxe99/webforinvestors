```javascript
import React, { useState } from 'react';
import { interactWithAI } from '../services/AIService';

const AIInteraction = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleInteraction = async () => {
    const aiResponse = await interactWithAI(message);
    setResponse(aiResponse);
  };

  return (
    <div id="aiInteraction">
      <h2>Interact with AI</h2>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
      <button onClick={handleInteraction}>Interact</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default AIInteraction;
```