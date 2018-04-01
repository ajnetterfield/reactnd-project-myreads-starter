import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BooksGrid from './BooksGrid';

class SearchBooksResults extends Component {
  static PropTypes = {
    foundBookIds: PropTypes.array.isRequired,
    searchQuery: PropTypes.string,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { books, foundBookIds, searchQuery, updateBook } = this.props;

    let foundBooks = [];

    foundBookIds.forEach((bookId) => {
      const foundBook = books.find((book) => book.id === bookId);
      if (foundBook) foundBooks.push(foundBook);
    });

    return (
      <div className='search-books-results'>
        {searchQuery && (
          <div>Found {foundBooks.length} results for "{searchQuery}"</div>
        )}

        <BooksGrid books={foundBooks} updateBook={updateBook} />
      </div>
    );
  }
}

export default SearchBooksResults;
