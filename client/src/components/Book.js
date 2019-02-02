import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../utils/API"
import "./bookStyle.css";

class Book extends Component {
    save = () => {
        API.saveBook({
            title: this.props.title,
            authors: this.props.authors,
            description: this.props.description,
            image: this.props.image,
            link: this.props.link
        })
        .then(results => {console.log(results)})
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
                    <Button variant="secondary" onClick={this.save}>Save</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default Book;