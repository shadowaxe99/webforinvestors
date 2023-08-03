```javascript
import React from 'react';

class EducationalIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            steps: [
                'Introduction to AI and Blockchain',
                'Understanding AI Capabilities',
                'The Process of Minting AI as NFTs',
                'Exploring the AI Marketplace'
            ]
        };
    }

    nextStep = () => {
        this.setState(prevState => ({
            step: prevState.step + 1
        }));
    }

    render() {
        return (
            <div id="educationalIntro">
                <h2>Educational Introduction</h2>
                <p>{this.state.steps[this.state.step]}</p>
                <button onClick={this.nextStep}>Next</button>
            </div>
        );
    }
}

export default EducationalIntro;
```