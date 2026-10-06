function BookDetails(){
    return(
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
    )
}
export default BookDetails;