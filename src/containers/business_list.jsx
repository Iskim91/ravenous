import React, { Component } from 'react';
import { connect } from 'react-redux';
import Business from './business';

import '../../assets/stylesheets/business.scss';

class BusinessList extends Component {

  renderList() {
    return this.props.businesses.map((business, i) => {
      return <Business business={business} key={i + 1} />;
    });
  }

  render() {
    return (
      <div className="BusinessList">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    businesses: state.businesses
  };
}

export default connect(mapStateToProps)(BusinessList);
