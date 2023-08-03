import React from 'react';

class AIPersona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aiPersona: null,
    };
  }

  componentDidMount() {
    // Fetch the AI persona data here
    // This is a placeholder and should be replaced with actual data fetching logic
    this.setState({
      aiPersona: {
        name: 'AI Persona Name',
        description: 'AI Persona Description',
        image: 'AI Persona Image URL',
      },
    });
  }

  render() {
    const { aiPersona } = this.state;

    if (!aiPersona) {
      return <div>Loading AI Persona...</div>;
    }

    return (
      <div id="aiPersona">
        <h2>{aiPersona.name}</h2>
        <img src={aiPersona.image} alt={aiPersona.name} />
        <p>{aiPersona.description}</p>
        <button onClick={this.props.collectAIPersona}>Collect this AI Persona</button>
      </div>
    );
  }
}

export default AIPersona;