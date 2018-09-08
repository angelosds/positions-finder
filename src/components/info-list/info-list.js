import React, { Component } from 'react';
import './info-list.scss';

import InfoCard from '../info-card/info-card';

class InfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: []
    };
  }
  render() {
    return (
      <section className="info-list">
        {this.getContent()}
      </section>
    );
  }
  componentWillReceiveProps(data) {
    this.setState(data);
  }
  getContent() {
    if (this.state.positions.length === 0) {
      return <p>Não há vagas para os critérios informados.</p>
    } else {
      return this.state.positions.map((position) => <InfoCard key={position.id} position={position} />);
    }
  }
}

export default InfoList;
