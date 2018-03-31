import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BooksGrid from './BooksGrid';

class SearchBooksResults extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className='search-books-results'>
        <BooksGrid books={this.props.books} />
      </div>
    );
  }
}

export default SearchBooksResults;
