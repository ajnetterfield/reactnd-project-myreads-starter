import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired
  };

  updateBook = (shelf) => {
    // TODO: Update this book via the Books API
  };

  render() {
    const { authors, imageLinks, shelf, title } = this.props.book;

    // TODO: Set height and width to match the size of the image
    const style = {
      backgroundImage: `url(${imageLinks.thumbnail})`,
      height: 192,
      width: 128
    }

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={style}></div>

          <div className='book-shelf-changer'>
            <select value={shelf} onChange={(e) => this.updateBook(e.target.value)}>
              <option value='none' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>

        <div className='book-title'>{title}</div>
        <div className='book-authors'>{authors}</div>
      </div>
    );
  }
}

export default Book;
