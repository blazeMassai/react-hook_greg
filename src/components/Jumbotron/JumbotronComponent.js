import React from 'react';
import logo from './simba1.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row} from 'react-bootstrap';
import './Jumbotron.css';
function trony (){
    return (
        <Container className="home text-dark mt-2 mb-3 p-5 rounded" >
            <h1>
                    <u>Art Shop</u>
            </h1>
            <h2>Welcome to the Art Gala</h2>
            <p>Set your sight free.</p>
            <img src={logo} className="App-logo text-white" alt="logo" />
        </Container>
    )
}

export default trony;