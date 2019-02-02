import React from "react";
import { Jumbotron } from 'react-bootstrap';
import "./myJumbotronStyle.css";

function MyJumbotron() {
    return (
        <Jumbotron className="header text-center">
            <div className="headerDiv">
                <h1>React Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
            </div>
        </Jumbotron>
    )
}
export default MyJumbotron;