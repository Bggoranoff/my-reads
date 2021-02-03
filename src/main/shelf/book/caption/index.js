import './styles.css';

function BookCaption(props) {
    return (
        <div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors ? props.authors.join(', ') : null}</div>
        </div>
    );
}

export default BookCaption;