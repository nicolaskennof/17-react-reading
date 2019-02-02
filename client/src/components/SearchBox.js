import React from "react";
import { Jumbotron, Form, FormControl, Button, Container } from 'react-bootstrap';

function SearchBox(props) {
    return (
        <Container>
            <Jumbotron>
                <Container>
                    <Form className="text-center">
                        <FormControl onChange={props.handleSearchChange} value={props.textSearch} type="text" placeholder="Search for your desired title here..." className="mr-sm-2 searchBar" />
                        <br />
                        <Button onClick={() => props.handleSearchClick()} variant="outline-dark">Search Now!</Button>
                    </Form>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default SearchBox;