import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [completed, setCompleted] = useState(false);

    // Get the book
    useEffect(() => {

        fetch(`http://localhost:1916/books/${id}`)
            .then((response) => response.json())
            .then((data) => {

                setBook(data);

                setTitle(data.title);
                setAuthor(data.author);
                setCompleted(data.completed);

            })
            .catch((error) => {
                console.error("Error fetching book:", error);
            });

    }, [id]);


    // UPDATE BOOK
    const handleUpdate = async (event) => {

        event.preventDefault();

        const updatedBook = {
            title,
            author,
            completed
        };

        try {

            const response = await fetch(
                `http://localhost:1916/books/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedBook)
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update book");
            }

            const data = await response.json();

            setBook(data);

            setTitle(data.title);
            setAuthor(data.author);
            setCompleted(data.completed);

            setIsEditing(false);

        } catch (error) {

            console.error("Error updating book:", error);

        }
    };


    // DELETE BOOK
    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:1916/books/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete book");
            }

            navigate("/books");

        } catch (error) {

            console.error("Error deleting book:", error);

        }
    };


    if (!book) {
        return <p>Loading book...</p>;
    }


    return (

        <div className="bookDetails">

            {isEditing ? (

                // EDIT MODE
                <form onSubmit={handleUpdate}>

                    <h1>Edit Book</h1>

                    <label>
                        Title:

                        <input
                            type="text"
                            value={title}
                            onChange={(event) =>
                                setTitle(event.target.value)
                            }
                        />

                    </label>

                    <label>
                        Author:

                        <input
                            type="text"
                            value={author}
                            onChange={(event) =>
                                setAuthor(event.target.value)
                            }
                        />

                    </label>

                    <label>
                        Completed:

                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={(event) =>
                                setCompleted(event.target.checked)
                            }
                        />

                    </label>

                    <button type="submit">
                        Save
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>

                </form>

            ) : (

                // VIEW MODE
                <>
                    <h1>{book.title}</h1>

                    <p>
                        <strong>Author:</strong> {book.author}
                    </p>

                    <p>
                        <strong>Completed:</strong>{" "}
                        {book.completed ? "Yes" : "No"}
                    </p>

                    <div className="bookActions">

                        <button
                            onClick={() => setIsEditing(true)}
                            aria-label="Edit book"
                        >
                            ✎
                        </button>

                        <button
                            onClick={handleDelete}
                            aria-label="Delete book"
                        >
                            🗑
                        </button>

                    </div>
                </>

            )}

        </div>

    );
}

export default BookDetails;