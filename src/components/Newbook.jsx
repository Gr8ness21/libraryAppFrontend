import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="newBookPage">

            <Link
                to="/"
                className="returnToLibrary"
            >
                ← Return to Library
            </Link>

            <div className="libraryCard">

                <header className="libraryCardHeader">
                    <p className="libraryName">
                        THE PERSONAL LIBRARY
                    </p>

                    <h1>
                        Library Catalog Card
                    </h1>

                    <div className="cardLine"></div>
                </header>


                <form
                    className="libraryCardForm"
                    onSubmit={handleSubmit}
                >

                    <label>
                        <span>Title</span>

                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(event) =>
                                setTitle(event.target.value)
                            }
                            required
                        />
                    </label>

                    <br />
                    <label>
                        <span>Author</span>

                        <input
                            type="text"
                            name="author"
                            value={author}
                            onChange={(event) =>
                                setAuthor(event.target.value)
                            }
                            required
                        />
                    </label>
                    <br />

                    <label className="completedField">

                        <input
                            type="checkbox"
                            name="completed"
                            checked={completed}
                            onChange={(event) =>
                                setCompleted(event.target.checked)
                            }
                        />

                        <span>
                            Book has been completed
                        </span>
                        <br />

                    </label>


                    <button type="submit">
                        Add to Library
                    </button>

                </form>


                <footer className="libraryCardFooter">

                    <span>
                        CATALOG
                    </span>

                    <span>
                        PERSONAL COLLECTION
                    </span>

                </footer>

            </div>
        </div>
    );
}

export default NewBook;