import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landingPage">
            <h1>Welcome To Your Personal Library App</h1>
            <ol>
                <li>
                    <Link to="/books">
                        List of Completed Books
                    </Link>
                </li>
                {/* Link to filtered list of completed books. */}

                <li>Your Unfinished Stories</li>
                {/* Link to filtered list of incomplete books. */}

                <li>New Addition to the Library</li>
                {/* Link to "New Book" page */}

                <li>Explore New Reads</li>
                {/* Link to "Book Search" page */}

                {/* This page will feature:
                Filter by name and genre.
                Best sellers/Popular.
                button next to the books to add to your reading list. */}
            </ol>
        </div>
    )
}

export default Landing;