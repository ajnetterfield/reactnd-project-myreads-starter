import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    book.shelf = shelf;

    this.setState((prevState) => ({
      books: prevState.books.map((prevBook) => (
        book.id === prevBook.id ? book : prevBook
      ))
    }));
  };

  // TODO: Implement function to search for books via the Books API

  render() {
    const { books } = this.state;

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks books={books} updateBook={this.updateBook} />
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooks books={books} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
