import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import { Translate, Section } from './components';

function App() {
  return (
    <div className="App">
      <Section title="Transform: translateX" vertical>
        <Translate /> 
        <Translate direction="right" />
        <Translate direction="left" />
      </Section>
      <Section title="Transform: translateY">
        <Translate direction="up" />
        <Translate direction="down" />
        <Translate direction="vertical" />
      </Section>
    </div>
  );
}

export default App;
