import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/header';
import InfoList from './components/info-list/info-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InfoList />
      </div>
    );
  }
}

export default App;
