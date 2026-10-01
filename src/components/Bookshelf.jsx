import { useEffect, useState } from "react";

function Bookshelf({}) {

     const [books, setBooks] = useState([]);

     useEffect(()=>{
        fetch("http://localhost:1916/books/")
            .then((response)=> response.json())
            .then((data) => {
                setBooks(data)
            })
            .catch((error)=> {
                console.error("We had an issue making fetch happen: ", error)
            });
     }, []);


    return (
        <div>
            <h1>Bookshelf</h1>
            <h2>Your List of Books.</h2>

            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <a href={`/books/${book._id}`}>
                            {book.title}
                        </a>

                        {/* <form>
                            <button type="submit">
                                DELETE
                            </button>
                        </form> */}

                        {/* <a href={`/books/${book._id}/edit`}>
                            Edit
                        </a> */}

                        <br />
                    </li>
                ))}
            </ul>

            <nav>
                <a href="/books/new">Add a New Book</a>
            </nav>
        </div>
    )
}

export default Bookshelf;