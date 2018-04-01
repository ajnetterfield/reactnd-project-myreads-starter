import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    foundBookIds: PropTypes.array.isRequired,
    searchBooks: PropTypes.func.isRequired,
    searchQuery: PropTypes.string,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { books, searchBooks, searchQuery, foundBookIds, updateBook } = this.props;

    return (
      <div className='search-books'>
        <SearchBooksBar searchBooks={searchBooks} searchQuery={searchQuery} />

        <SearchBooksResults
          books={books}
          foundBookIds={foundBookIds}
          searchQuery={searchQuery}
          updateBook={updateBook}
        />
      </div>
    );
  }
}

export default SearchBooks;
