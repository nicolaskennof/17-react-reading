import React, { Component } from "react";
import List from "../components/List"
import SearchBox from "../components/SearchBox";
import API from "../utils/API"

class Search extends Component {
    state = {
        textSearch: "",
        books: []
    }

    handleSearchChange = (e) => {
        this.setState({
            textSearch: e.target.value
        })
    }

    handleSearchClick = (e) => {
        API.getGoogleBooks(this.state.textSearch)
            .then((results) => {
                this.setState({
                    books: results.data.items
                }
                )
            }
            );
    }

    render() {
        return (
            <div>
                <SearchBox textSearch={this.state.textSearch} handleSearchClick={this.handleSearchClick} handleSearchChange={this.handleSearchChange} />
                <List books={this.state.books} />
            </div>
        )
    }
}

export default Search;