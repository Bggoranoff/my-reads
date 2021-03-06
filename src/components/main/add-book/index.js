import './styles.css';

function AddBook(props) {
    const handleClick = () => {
        props.history.push('/search');
    }

    return (
        <div className='open-search'>
            <button onClick={handleClick}>Add book</button>
        </div>
    );
}

export default AddBook;