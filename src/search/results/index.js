import Book from '../../main/shelf/book';
import './styles.css';

function SearchResults(props) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {props.results ? props.results.map(result => <Book key={`search ${result.id}`} book={result} updateBook={props.addBook} shelves={props.shelves} add={true} />) : null}
            </ol>
        </div>
    );
}

export default SearchResults;