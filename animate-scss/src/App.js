import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import { TranslateX, TranslateY, Section } from './components';

function App() {
  return (
    <div className="App">
      <Section title="Transform: translateX" vertical>
        <TranslateX /> 
        <TranslateX direction="right" />
        <TranslateX direction="left" />
      </Section>
      <Section title="Transform: translateY">
        <TranslateY />
        <TranslateY direction="up" />
        <TranslateY direction="down" />
      </Section>
    </div>
  );
}

export default App;
