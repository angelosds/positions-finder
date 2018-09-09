import React, { Component } from 'react';
import './info-list.scss';

import InfoCard from '../info-card/info-card';

class InfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null,
      positions: []
    };

    this.showAlert = this.showAlert.bind(this);
  }
  render() {
    return (
      <section className="info-list">
        {this.getContent()}
        {this.getAlert()}
      </section>
    );
  }
  getContent() {
    if (this.state.positions.length === 0) {
      return <p className="message"><i className="message__icon material-icons">search</i>Não há vagas para os critérios informados.</p>
    } else {
      return this.state.positions.map((position) => <InfoCard key={position.id} position={position} onFavoriteToggle={this.props.onFavoriteToggle} onAlert={(message) => this.showAlert(message)} />);
    }
  }
  getAlert() {
    if (this.state.alert !== null) {
      return <div className="alert">{this.state.alert}</div>;
    } else {
      return;
    }
  }
  showAlert(message) {
    this.setState({
      alert: message
    });

    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 4000);
  }
  componentWillReceiveProps(data) {
    this.setState(data);
  }
}

export default InfoList;
