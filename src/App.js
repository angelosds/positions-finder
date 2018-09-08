import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/header';
import InfoList from './components/info-list/info-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: []
    }

    this.positions = [];

    this.onFavoritesToggle = this.onFavoritesToggle.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.getPositions();
  }
  render() {
    return (
      <div className="App">
        <Header onFavoritesToggle={this.onFavoritesToggle} onFilter={this.onFilter} />
        <InfoList positions={this.state.positions} />
      </div>
    );
  }
  onFavoritesToggle(checked) {
    this.setState({
      positions: this.positions.filter(position => position.isFavorite === checked)
    });
  }
  onFilter(value) {
    this.setState({
      positions: this.positions.filter(position => position.title.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    });
  }
  getPositions() {
    const req = new XMLHttpRequest();
    req.withCredentials = true;

    req.addEventListener('readystatechange', response => {
      if (response.target.readyState === 4) {
        const positions = JSON.parse(response.target.responseText);

        if (positions === null || positions === '') {
          return;
        }

        this.positions = positions.map(position => {
          return {
            id: position._id,
            title: position.name,
            description: position.description,
            isFavorite: false
          };
        });

        this.setState({
          positions: this.positions
        });
      }
    });

    req.open('GET', 'https://api.kenoby.com/positions');
    req.setRequestHeader('x-tenant', '55b7e031299d4e33019c1c5a');
    req.setRequestHeader('x-version', '3.0.0');

    req.send(null);
  }
}

export default App;
