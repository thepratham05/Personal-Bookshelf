import React, {useEffect, useState} from "react";

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBookshelf);
    }, []);

    return(
        <div className="container">
            <h2>My Bookshelf</h2>
            <div className="book-card-container">
            {bookshelf.map((book, index) => (
                <div key={index} className="book-card">
                    <h3>{book.title}</h3>
                    <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default BookshelfPage;