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
            .then(results => { console.log(results) })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header as="h5"><i>{this.props.title}</i></Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-2">
                                <Card.Img className="bookImg" src={this.props.image} />
                            </div>
                            <div className="col-10 bookDetails">
                                <Card.Title>{this.props.authors}</Card.Title>
                                <Card.Text>
                                    {this.props.description}
                                </Card.Text>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12  text-center">
                                <a variant="primary" href={this.props.link} target="_blank" rel="noopener noreferrer">View <i class="fas fa-external-link-alt"></i></a>
                                <Button className="btn-save" variant="success" onClick={this.save}>Save</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div>
        )
    }
}


export default Book;