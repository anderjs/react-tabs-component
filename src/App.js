import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <Tabs content={[
            { tabName: 'Panel', JSX: <div>Hello World</div> },
            { tabName: 'Panel 2', JSX: <div>Hello World 2</div> }
          ]} />
        </div>
      </div>
    </div>
  );
}

export default App;
