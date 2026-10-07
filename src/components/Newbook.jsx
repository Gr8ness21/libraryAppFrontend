import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newBook = {
            title,
            author,
            completed
        };

        try {
            const response = await fetch("http://localhost:1916/books/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            });

            if (!response.ok) {
                throw new Error("Failed to create book");
            }

            const createdBook = await response.json();

            console.log("Book created:", createdBook);

            navigate("/books");

        } catch (error) {
            console.error("Error creating book:", error);
        }
    };

    return (
        <div>
            <h1>New Book Page</h1>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>

                <br />

                <label>
                    Author:
                    <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </label>

                <br />

                <label>
                    Completed:
                    <input
                        type="checkbox"
                        name="completed"
                        checked={completed}
                        onChange={(event) => setCompleted(event.target.checked)}
                    />
                </label>

                <br />

                <button type="submit">
                    Add Book
                </button>

            </form>
        </div>
    );
}

export default NewBook;