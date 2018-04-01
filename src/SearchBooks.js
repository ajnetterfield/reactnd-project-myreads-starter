import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    searchQuery: PropTypes.string,
    searchResults: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { searchBooks, searchQuery, searchResults, updateBook } = this.props;

    return (
      <div className='search-books'>
        <SearchBooksBar searchBooks={searchBooks} />

        <SearchBooksResults
          searchQuery={searchQuery}
          searchResults={searchResults}
          updateBook={updateBook}
        />
      </div>
    );
  }
}

export default SearchBooks;
