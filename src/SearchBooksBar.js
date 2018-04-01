import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooksBar extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query
    }));

    this.props.searchBooks(query);
  }

  render() {
    return (
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>Close</Link>

        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={this.state.query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooksBar;
