import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {

    const { id } = useParams();

    const [book, setBook] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:1916/books/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBook(data);
            })
            .catch((error) => {
                console.error("Error fetching book:", error);
            });

    }, [id]);

    if (!book) {
        return <p>Loading book...</p>;
    }

    return (
        <div className="bookDetails">

            <h1>{book.title}</h1>

            <p>
                <strong>Author:</strong> {book.author}
            </p>

            <p>
                <strong>Completed:</strong>{" "}
                {book.completed ? "Yes" : "No"}
            </p>

        </div>
    );
}

export default BookDetails;