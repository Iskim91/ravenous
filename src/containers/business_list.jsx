import React, { Component } from 'react';
import '../../assets/stylesheets/business.scss';

import Business from './business';

class BusinessList extends Component {

  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;
