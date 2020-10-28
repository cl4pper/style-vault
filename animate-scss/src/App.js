import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import { TranslateX, TranslateY, Rotate, Section } from './components';

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
      <Section title="Rotate">
        <Rotate />
        <Rotate clockwise label="clockwise" />
        <Rotate counterclock label="counterclock" />
      </Section>
    </div>
  );
}

export default App;
