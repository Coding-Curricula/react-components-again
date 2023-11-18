const Book = (props) => {

    const {title, author, year} = props

    return (
        <div>
            <ul>
                <li>
                    <h3>Title: {title}</h3>
                    <p>by {author}</p>
                    <p>in {year}</p>
                </li>
            </ul>
        </div>
    )
}

export default Book