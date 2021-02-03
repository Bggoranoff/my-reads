import { useState } from 'react';
import SearchBar from './bar';
import SearchResults from './results';

function Search(props) {
    let [results, setResults] = useState([]);
    let handleChange = event => {
        fetch("https://reactnd-books-api.udacity.com/search", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: event.target.value })
        })
            .then(res => res.json())
            .then(data => data.books)
            .then((books) => setResults(books ? books.filter(book => props.books.filter(currentBook => currentBook.id === book.id).length === 0) : [] ))
            .catch(() => setResults([]));
    }

    return (
        <div className="search-books">
            <SearchBar handleChange={handleChange} />
            <SearchResults results={results} addBook={props.addBook} shelves={props.shelves} />
        </div>
    );
}

export default Search;