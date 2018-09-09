import React, { Component } from 'react';
import './toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.toggle = this.toggle.bind(this);
  }
  render() {
    return (
      <label className="toggle" title={this.state.isActive ? 'Exibir todas as vagas' : 'Exibir vagas favoritas'}>
        <input className="toggle__check" type="checkbox" onChange={(e) => this.toggle(e.target.checked)} />
        <span className="toggle__bg material-icons"><span className="toggle__icon star">star</span></span>
      </label>
    );
  }
  toggle(checked) {
    this.setState({
      isActive: checked
    });

    this.props.onChange(checked);
  }
}

export default Toggle;
