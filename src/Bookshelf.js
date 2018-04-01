import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BooksGrid from './BooksGrid';

class Bookshelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { books, title, updateBook } = this.props;

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>

        <div className='bookshelf-books'>
          <BooksGrid books={books} updateBook={updateBook} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
