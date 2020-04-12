import React, { Component } from 'react';

import BusinessList from '../containers/business_list';
import SearchBar from '../containers/search_bar';

import '../../assets/stylesheets/app.scss';

class App extends Component {
  // constructor(props) {
  //   super(props);


  // }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>

    );
  }
}

export default App;
