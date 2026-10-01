import { useState } from "react";

function NewBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            title,
            author,
            completed
        });
    };

    return (
        <div>
            <h1>New Book Page</h1>
            <form onSubmit={handleSubmit}>
                <label> Title: <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} /> </label> <br />
                <label> Author: <input type="text" name="author" value={author} onChange={(event) => setAuthor(event.target.value)} /> </label> <br />
                <label> Completed: <input type="checkbox" name="completed" checked={completed} onChange={(event) => setCompleted(event.target.checked)} /> </label> <br />
                <button type="submit"> Add Book </button>
            </form>
        </div>
    )
}

export default NewBook;