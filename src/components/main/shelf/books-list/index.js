import Book from '../book';
import './styles.css';

function BooksList(props) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map(book => <Book key={book.id} book={book} updateBook={props.updateBook} shelves={props.shelves} />)}
            </ol>
        </div>
    );
}

export default BooksList;