import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BooksGrid from './BooksGrid';

class SearchBooksResults extends Component {
  static PropTypes = {
    searchQuery: PropTypes.string,
    searchResults: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { searchQuery, searchResults, updateBook } = this.props;

    return (
      <div className='search-books-results'>
        {searchQuery && (
          <span>Found {searchResults.length} results for "{searchQuery}"</span>
        )}

        <BooksGrid books={searchResults} updateBook={updateBook} />
      </div>
    );
  }
}

export default SearchBooksResults;
