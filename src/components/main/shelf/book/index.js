import BookCaption from './caption';
import BookCover from './cover';
import ShelfChanger from '../shelf-changer';
import './styles.css';

function Book(props) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <BookCover link={props.book.imageLinks.thumbnail} />
                    <ShelfChanger updateBook={props.updateBook} book={props.book} shelves={props.shelves} add={props.add} />
                </div>
                <BookCaption authors={props.book.authors} title={props.book.title} />
            </div>
        </li>
    );
}

export default Book;