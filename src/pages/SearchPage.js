import React, { useState, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import BookCard from '../components/BookCard';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const fetchBooks = async (query) => {
        if (query.length > 2) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
            setBooks(response.data.docs);
        } else {
            setBooks([]);
        }
    };
    
    const debouncedFetchBooks = useCallback(_.debounce(fetchBooks, 300), []);

    const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
    debouncedFetchBooks(query);
    };

    const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
    };
    
    return (
    <div className='container'>
    <input type="text" value={query} onChange={handleSearch} placeholder="Search for books"/>
    <div className='book-card-container'>
        {books.map((book) => (
            <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
            ))}
    </div>
    </div>
    );
};

export default SearchPage;