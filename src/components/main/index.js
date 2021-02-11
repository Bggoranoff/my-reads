import AddBook from './add-book';
import Header from '../header';
import Shelf from './shelf';
import './styles.css';

function Main(props) {
    return (
        <div className="list-books">
            <Header />
            <div className="list-books-content">
                <div>
                    {props.shelves.map(s => <Shelf key={s.id} shelves={props.shelves} updateBook={props.updateBook} books={props.books.filter(book => book.shelf === s.id)} title={s.title} />)}
                </div>
            </div>
            <AddBook history={props.history} />
        </div>
    );
}

export default Main;