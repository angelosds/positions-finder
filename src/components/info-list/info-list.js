import React, { Component } from 'react';
import './info-list.scss';

import InfoCard from '../info-card/info-card';

class InfoList extends Component {
  render() {
    return (
      <section className="info-list">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>
    );
  }
}

export default InfoList;
