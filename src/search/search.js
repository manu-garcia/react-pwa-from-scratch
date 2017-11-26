import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';

import './search.scss';

class Search extends Component {
  render () {
    return (
      <div className="search-component">
        <div className="search-header">
          <input type="text" name="searchKeyword" />
          <FaSearch className="search-icon"/>
        </div>
        <div className="search-content-box">
          <div className="search-refine-box">
            <div className="header">Refine search</div>
            <div>
              <ul>
                <li><input type="checkbox" />Profiles</li>
                <li><input type="checkbox" />Bands</li>
                <li><input type="checkbox" />Events</li>
              </ul>
            </div>
          </div>
          <div className="search-results-box">
          <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
            <div className="search-result-box">
              <span className="search-result-title">Result example title</span>
              <p>This is a result example description</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
