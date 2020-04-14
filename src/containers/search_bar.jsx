import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../assets/stylesheets/search_bar.scss';
import { setBusinesses } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.sortByOptions = {
      'best_match': 'Best Match',
      'rating': 'Highest Rated',
      'review_count': 'Most Reviewed'
    };
  }
  getSortByClass = (sortByOption) => {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange = (e) => {
    this.setState({
      sortBy: e.target.attributes.value.value
      // sortBy: e.target.attributes.value.value
    });
  }

  handleTerm = (e) => {
    this.setState({
      term: e.target.value
    });
  }

  handleLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  }

  handleClick = (e) => {
    this.setState({
      sortBy: e.target.attributes.value.value
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { term, location, sortBy } = this.state;
    this.props.setBusinesses(term, location, sortBy);
  }

  renderSortByOption = () => {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      return <li key={sortByOption} className={this.getSortByClass(sortByOption)} onClick={this.handleSortByChange} value={sortByOption} > {this.sortByOptions[sortByOption]}  </li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOption()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" value={this.state.term} onChange={this.handleTerm} />
          <input placeholder="Where?" value={this.state.location} onChange={this.handleLocation} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} >Let's Go</a>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setBusinesses }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
