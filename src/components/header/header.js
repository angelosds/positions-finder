import React, { Component } from 'react';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a>
          <img className="header__logo" src="/assets/images/logo.svg" alt="Kenoby" />
        </a>
        <img className="header__avatar" src="/assets/images/avatar.png" alt="Avatar" />
      </header>
    )
  }
}

export default Header;
