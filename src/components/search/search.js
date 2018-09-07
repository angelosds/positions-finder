import React, { Component } from 'react';
import './search.scss';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <span className="search__icon material-icons">search</span>
        <input className="search__field" type="search" placeholder="Encontre uma vaga..." />
      </div>
    );
  }
}

export default Search;
