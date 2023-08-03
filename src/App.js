```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EducationalIntro from './components/EducationalIntro';
import AIInteraction from './components/AIInteraction';
import MintingProcess from './components/MintingProcess';
import AIMarketplace from './components/AIMarketplace';
import UserProfile from './components/UserProfile';
import AIPersona from './components/AIPersona';
import BlockchainGuide from './components/BlockchainGuide';
import AIGuide from './components/AIGuide';
import Authentication from './components/Authentication';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EducationalIntro} />
        <Route path="/ai-interaction" component={AIInteraction} />
        <Route path="/minting-process" component={MintingProcess} />
        <Route path="/ai-marketplace" component={AIMarketplace} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/ai-persona" component={AIPersona} />
        <Route path="/blockchain-guide" component={BlockchainGuide} />
        <Route path="/ai-guide" component={AIGuide} />
        <Route path="/authentication" component={Authentication} />
      </Switch>
    </Router>
  );
}

export default App;
```