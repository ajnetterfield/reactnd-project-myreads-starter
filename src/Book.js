import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { book, updateBook } = this.props;
    const { authors, imageLinks, shelf, title } = book;

    const hasCoverImage = imageLinks && imageLinks.thumbnail;
    const coverImage = hasCoverImage ? `url(${imageLinks.thumbnail})` : '';

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ backgroundImage: coverImage }}>
            {!hasCoverImage && <div className='book-cover-none'>No Cover</div>}
          </div>

          <div className='book-shelf-changer'>
            <select
              value={shelf || 'none'}
              onChange={(e) => updateBook(book, e.target.value)}
            >
              <option value='none' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>

        <div className='book-title'>{title || 'No Title'}</div>
        <div className='book-authors'>{authors || 'No Author'}</div>
      </div>
    );
  }
}

export default Book;
