```javascript
import React, { useState, useEffect } from 'react';
import { BlockchainService } from '../services/BlockchainService';

const MintingProcess = () => {
    const [mintingStatus, setMintingStatus] = useState('Not Started');
    const [aiAgent, setAIAgent] = useState(null);

    useEffect(() => {
        // Assume aiAgent is passed as a prop or fetched from a context or state
        if (aiAgent) {
            startMinting(aiAgent);
        }
    }, [aiAgent]);

    const startMinting = async (aiAgent) => {
        setMintingStatus('Minting in progress...');
        try {
            const mintedNFT = await BlockchainService.mintNFT(aiAgent);
            setMintingStatus(`Minting completed. NFT ID: ${mintedNFT.id}`);
        } catch (error) {
            setMintingStatus('Minting failed. Please try again.');
        }
    };

    return (
        <div id="mintingProcess">
            <h2>Minting Process</h2>
            <p>{mintingStatus}</p>
        </div>
    );
};

export default MintingProcess;
```