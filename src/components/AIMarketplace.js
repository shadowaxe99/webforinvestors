import React, { useState, useEffect } from 'react';
import MarketplaceService from '../services/MarketplaceService';
import AIPersona from './AIPersona';

const AIMarketplace = () => {
  const [aiPersonas, setAIPersonas] = useState([]);

  useEffect(() => {
    fetchAIPersonas();
  }, []);

  const fetchAIPersonas = async () => {
    const personas = await MarketplaceService.getAIPersonas();
    setAIPersonas(personas);
  };

  const handleCollect = async (personaId) => {
    const result = await MarketplaceService.collectAIPersona(personaId);
    if (result.success) {
      fetchAIPersonas();
    } else {
      console.error(result.message);
    }
  };

  return (
    <div id="aiMarketplace">
      <h2>AI Marketplace</h2>
      <div className="persona-list">
        {aiPersonas.map((persona) => (
          <AIPersona key={persona.id} persona={persona} onCollect={handleCollect} />
        ))}
      </div>
    </div>
  );
};

export default AIMarketplace;