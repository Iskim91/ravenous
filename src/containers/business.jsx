import React, { Component } from 'react';
import '../../assets/stylesheets/business.scss';

class Business extends Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container" style={{backgroundImage: `url(${business.image_url})`}} />
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">4.5 stars</h3>
            <p>{business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
