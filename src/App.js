import React, { Component } from 'react';
import { debounce } from 'underscore';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    searchQuery: '',
    searchResults: []
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

    // TODO: Handle new books added to shelves from search page
    this.setState((prevState) => ({
      books: prevState.books.map((prevBook) => (
        book.id === prevBook.id ? book : prevBook
      ))
    }));
  };

  searchBooks = debounce((query) => {
    query = query.trim();

    if (query === '') {
      this.setState(() => ({
        searchQuery: '',
        searchResults: []
      }));
    } else {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults.error) {
          this.setState(() => ({
            searchQuery: query,
            searchResults: []
          }));
        } else {
          this.setState(() => ({
            searchQuery: query,
            searchResults
          }));
        }
      });
    }
  }, 200);

  render() {
    const { books, searchQuery, searchResults } = this.state;

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks books={books} updateBook={this.updateBook} />
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooks
            searchBooks={this.searchBooks}
            searchQuery={searchQuery}
            searchResults={searchResults}
            updateBook={this.updateBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp;
