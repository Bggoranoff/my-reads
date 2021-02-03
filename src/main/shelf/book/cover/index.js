import './styles.css';

function BookCover(props) {
    return (
        <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${props.link ? props.link : ''})` }}></div>
    );
}

export default BookCover;