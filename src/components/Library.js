import React from 'react'
import BookList from './BookList'

export default function Library() {
    const books = [
        { id: 1, title: 'The Hobbit', author: 'J.R.R.Tolkien', year: 1937 },
        { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    ]

    return (
        <div>
            <h1>Book Library</h1>
            <BookList books={books} />
        </div>
    )
}
