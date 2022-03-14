import React from 'react';
import Rating from "../Rating/Rating";
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row} from 'react-bootstrap';


const Product = (props) =>{
    return (
        <Container>
                <Row>
                    <Col lg={4}>
                            <img
                        width={150}
                        height={150}
                        className=""
                        src={props.data.imageUrl}
                        alt={Image}
                    />
                    </Col>

                    <Col lg={8}>

                        <h5>{props.data.productName}</h5>
                        {props.data.releaseDate}

                        <Rating
                            rating={props.data.rating} numOfReviews={props.data.numOfReviews}
                        />
                        <p> {props.data.description} </p>

                    </Col>

                </Row>
        </Container>
    )
}

export default Product;