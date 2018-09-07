import React, { Component } from 'react';
import './toggle.scss';

class Toggle extends Component {
  render() {
    return (
      <label className="toggle" title="Exibir favoritos">
        <input className="toggle__check" type="checkbox" />
        <span className="toggle__bg material-icons"><span className="toggle__icon star">star</span></span>
      </label>
    );
  }
}

export default Toggle;
