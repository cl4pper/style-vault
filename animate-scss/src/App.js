import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import { Translate, Section } from './components';

function App() {
  return (
    <div className="App">
      <Section title="Translate">
        <div>
          <Translate />
          <Translate direction="right" />
          <Translate direction="left" />
        </div>
      </Section>
    </div>
  );
}

export default App;
