import BooksList from './books-list';
import './styles.css';

function Shelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <BooksList books={props.books} updateBook={props.updateBook} shelves={props.shelves} />
        </div>
    );
}

export default Shelf;