import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  booksOnShelf = (shelf) => {
    return this.props.books.filter((book) => (book.shelf === shelf));
  };

  render() {
    const { updateBook } = this.props;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          <Bookshelf
            books={this.booksOnShelf('currentlyReading')}
            title={'Currently Reading'}
            updateBook={updateBook}
          />

          <Bookshelf
            books={this.booksOnShelf('wantToRead')}
            title={'Want to Read'}
            updateBook={updateBook}
          />

          <Bookshelf
            books={this.booksOnShelf('read')}
            title={'Read'}
            updateBook={updateBook}
          />
        </div>

        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
