import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/header';
import InfoList from './components/info-list/info-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.positions = [];

    this.state = {
      isLoading: true,
      positions: [],
      onlyFavorites: false,
      query: ''
    }

    this.onFavoritesToggle = this.onFavoritesToggle.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onFavoriteToggle = this.onFavoriteToggle.bind(this);
    this.filterPositions = this.filterPositions.bind(this);

    this.getPositions();
  }
  render() {
    const content = this.state.isLoading ? this.renderLoader() : this.renderList();

    return (
      <div className="App">
        <Header onFavoritesToggle={this.onFavoritesToggle} onFilter={this.onFilter} />
        {content}
      </div>
    );
  }
  renderLoader() {
    return (
      <span title="Carregando vagas" className="loader"></span>
    );
  }
  renderList() {
    return (
      <InfoList positions={this.state.positions} onFavoriteToggle={this.onFavoriteToggle} />
    );
  }
  onFavoritesToggle(checked) {
    this.setState({
      onlyFavorites: checked
    }, this.filterPositions);
  }
  onFilter(value) {
    this.setState({
      query: value.toLowerCase()
    }, this.filterPositions);
  }
  onFavoriteToggle(id, isFavorite) {
    this.positions = this.positions.map(position => {
      if (position.id === id) position.isFavorite = isFavorite;

      return position;
    });

    this.setState({
      position: this.positions
    });
  }
  filterPositions() {
    this.setState({
      positions: this.positions.filter(position => {
        const onQuery = position.title.toLowerCase().indexOf(this.state.query) >= 0;
        const onFavorite = this.state.onlyFavorites ? position.isFavorite : true;

        return onQuery && onFavorite;
      })
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
            __html: position.description,
            isFavorite: false
          };
        });

        this.setState({ isLoading: false }, () => {
          this.setState({ positions: this.positions })
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
