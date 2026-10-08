import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Bookshelf({ }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1916/books/")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data)
            })
            .catch((error) => {
                console.error("We had an issue making fetch happen: ", error)
            });
    }, []);


    return (
        <div className="bookshelfPage">

            <Link
                to="/"
                className="returnToLibrary"
            >
                ← Return to Library
            </Link>

            <header className="bookshelfHeader">
                <h1>Bookshelf</h1>
                <p>Your List of Books</p>
            </header>

            <main className="bookshelf">

                <div className="shelf">

                    {books.map((book) => (
                        <Link
                            key={book._id}
                            to={`/books/${book._id}`}
                            className="book"
                        >
                            <span className="bookTitle">
                                {book.title}
                            </span>
                        </Link>
                    ))}

                </div>

            </main>

            <nav className="bookshelfNav">
                <Link to="/books/new">
                    + Add a New Book
                </Link>
            </nav>

        </div>
    );
}

export default Bookshelf;