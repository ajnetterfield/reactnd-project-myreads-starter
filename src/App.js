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
    foundBookIds: [],
    searchQuery: ''
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
      books: prevState.books.filter((x) => x.id !== book.id).concat(book)
    }));
  };

  searchBooks = debounce((query) => {
    query = query.trim();

    if (query === '') {
      this.setState(() => ({
        foundBookIds: [],
        searchQuery: ''
      }));
    } else {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults.error) {
          this.setState(() => ({
            foundBookIds: [],
            searchQuery: query
          }));
        } else {
          this.setState((prevState) => {
            let newBooks = [];

            searchResults.forEach((searchResult) => {
              const index = prevState.books.findIndex((book) => (
                book.id === searchResult.id
              ));

              if (index === -1) newBooks.push(searchResult);
            });

            return {
              books: prevState.books.concat(newBooks),
              foundBookIds: searchResults.map((book) => book.id),
              searchQuery: query
            };
          });
        }
      });
    }
  }, 200);

  render() {
    const { books, foundBookIds, searchQuery } = this.state;

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks books={books} updateBook={this.updateBook} />
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooks
            books={books}
            foundBookIds={foundBookIds}
            searchBooks={this.searchBooks}
            searchQuery={searchQuery}
            updateBook={this.updateBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp;
