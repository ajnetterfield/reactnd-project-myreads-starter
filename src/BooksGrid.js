import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Book from './Book';

class BooksGrid extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { books, updateBook } = this.props;

    return (
      <ol className='books-grid'>
        {
          books.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBook={updateBook} />
            </li>
          ))
        }
      </ol>
    );
  }
}

export default BooksGrid;
