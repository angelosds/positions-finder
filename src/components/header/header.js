import React, { Component } from 'react';
import './header.scss';

import Search from '../search/search';
import Toggle from '../toggle/toggle';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a>
          <img className="header__logo" src="/assets/images/logo.svg" alt="Kenoby" />
        </a>
        <Search />
        <Toggle />
        <img className="header__avatar" src="/assets/images/avatar.png" alt="Avatar" />
      </header>
    )
  }
}

export default Header;
