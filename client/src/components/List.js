import React from "react";
import { Card } from "react-bootstrap";
import Book from "./Book";

function List(props) {
    return (
        <Card>
            <Card.Header as="h5">Your results:</Card.Header>
            <Card.Body>
                {props.books.map((book) => {
                    return <Book key={book.id} title={book.volumeInfo.title} authors={book.volumeInfo.authors} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.smallThumbnail} link={book.volumeInfo.previewLink} />
                })}
            </Card.Body>
        </Card>
   )
}
export default List;