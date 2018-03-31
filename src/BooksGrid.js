import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Book from './Book';

class BooksGrid extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    return (
      <ol className='books-grid'>
        {
          this.props.books.map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))
        }
      </ol>
    );
  }
}

export default BooksGrid;
