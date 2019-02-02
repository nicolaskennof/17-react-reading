import React from "react";
import { Card } from "react-bootstrap";
import SavedBook from "./SavedBook";

function SavedList(props) {
    return (
        <Card>
            <Card.Header as="h5">Your results:</Card.Header>
            <Card.Body>
                {props.books.map((book) => {
                    return <SavedBook reloadBooks={props.reloadBooks} key={book._id} id={book._id} title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link} />
                })}
            </Card.Body>
        </Card>
   )
}
export default SavedList;