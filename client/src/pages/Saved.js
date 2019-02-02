import React, { Component } from "react";
import SavedList from "../components/SavedList"
import API from "../utils/API"

class Saved extends Component {
state = {
    books: []
}

    componentDidMount() {
        API.getBooks()
        .then(results => {
            this.setState({
                books: results.data
            })
        })
    }

    reloadBooks = () => {
        API.getBooks()
        .then(results => {
            this.setState({
                books: results.data
            })
        })
    }

    render() {
        return (
            <div>
                <SavedList reloadBooks={this.reloadBooks} books={this.state.books} />

            </div>
        )
    }
}

export default Saved;