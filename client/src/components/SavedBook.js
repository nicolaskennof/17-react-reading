import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../utils/API"
import "./bookStyle.css";

class SavedBook extends Component {
    delete = () => {
        console.log(this.props.id)
        API.deleteBook(this.props.id)
        .then(() => {
           this.props.reloadBooks(); 
        })
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Img className="bookImg" src={this.props.image} />
                    <Card.Title>{this.props.authors}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <a variant="primary" href={this.props.link} target="_blank">View</a>
                    <Button variant="alert" onClick={this.delete}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default SavedBook;