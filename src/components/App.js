import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main';
import Search from './search';

function App() {
  let token = localStorage.token;
  if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
  }

  const [books, setBooks] = useState([]);
  const shelves = [{ id: 'currentlyReading', title: 'Currently Reading' }, { title: 'Want to Read', id: 'wantToRead' }, { title: 'Read', id: 'read' }];

  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Accept': 'application/json',
        'Authorization': token
      }
    })
      .then(res => res.json())
      .then(data => data.books)
      .then(b => setBooks([...b.filter(book => book.shelf !== 'none')]));
  });

  const updateBook = (book, shelf) => {
    fetch(`https://reactnd-books-api.udacity.com/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shelf })
    })
      .then(res => res.json())
      .then(() => {
        book.shelf = shelf;
        if (book.shelf !== 'none') {
          setBooks([...books.filter(b => b.title !== book.title), book]);
        } else {
          setBooks([...books.filter(b => b.shelf !== 'none')]);
        }
      });
  }

  return (
    <BrowserRouter>
        <div className="app">
          <Route path='/search' render={({ history }) => <Search addBook={updateBook} history={history} shelves={shelves} books={books} />} />
          <Route path='/' exact render={({ history }) => <Main books={books} updateBook={updateBook} history={history} shelves={shelves} />} />
        </div>
      </BrowserRouter>
  );
}

export default App;