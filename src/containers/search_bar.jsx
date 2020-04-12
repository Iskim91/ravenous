import React, { Component } from 'react';
import '../../assets/stylesheets/search_bar.scss';

const sortByOptions = {
  'Best Match': 'Best Match',
  'Highest Rated': 'Highest Rated',
  'Most Reviewed': 'Most Reviewed'
};
class SearchBar extends Component {


  renderSortByOption = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      return <li key={sortByOption}> {sortByOptions[sortByOption]}</li>;
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
