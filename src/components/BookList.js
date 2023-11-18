import Book from './Book';

const BookList = ({ books }) => {
    return (
        <div>
            <h3>Book List</h3>
            <ul>
                {books.map(book => (
                    <Book
                        key={book.id}
                        {...book}
                    />
                ))}
            </ul>
        </div>
    )
}

export default BookList;