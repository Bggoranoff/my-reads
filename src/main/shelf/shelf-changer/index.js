import { useState } from 'react';
import './styles.css';

function ShelfChanger(props) {
    let [shelf, setShelf] = useState(props.book.shelf ? props.book.shelf : 'move');
    let updateBook = event => {
        if(shelf !== event.target.value) {
            setShelf(event.target.value);
            props.updateBook(props.book, event.target.value);
        }
    };
    return (
        <div className="book-shelf-changer">
                <select value={shelf} onChange={updateBook}>
                    <option value="move" disabled>{props.add ? 'Add to...' : 'Move to...'}</option>
                    {props.shelves.map(s => <option key={`${props.book.id} - ${s.id}`} value={s.id}>{s.title}</option>)}
                    {props.book.shelf ? <option value="none">None</option> : null}
                </select>
            </div>
    );
}

export default ShelfChanger;