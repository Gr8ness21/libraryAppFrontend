function Landing() {
    return (
        <div className="landingPage">
            <h1>Welcome To Your Personal Library App</h1>
            <ol>
                <li>List of Completed Books</li>
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