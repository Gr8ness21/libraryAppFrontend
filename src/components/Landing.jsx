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
            </ol>
        </div>
    )
}

export default Landing;