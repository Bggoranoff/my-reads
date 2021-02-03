import { Link } from 'react-router-dom';
import './styles.css';

function SearchBar(props) {
    return (
        <div className="search-books-bar">
            <Link className='close-search' to='/'>Close search</Link>
            <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" onChange={props.handleChange} />

            </div>
        </div>
    );
}

export default SearchBar;