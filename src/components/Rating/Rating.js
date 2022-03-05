import React, { useState } from "react";
import {Container} from "react-bootstrap";
import {IoIosStar, IoIosStarOutline} from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rating.css'



function Rating(props) {

    const [rating, setRating] = useState(props.rating)

    return(
       <Container >
           <h3>Rating: {rating} </h3>
           {rating >= 1? (
               <IoIosStar id="nyota" onClick={() => setRating(1)} />
           ):(
               <IoIosStarOutline id="nyota" onClick={() => setRating(1)} />
           )}
           {rating >= 2? (
               <IoIosStar id="nyota" onClick={() => setRating(2)} />
           ):(
               <IoIosStarOutline id="nyota" onClick={() => setRating(2)} />
           )}
           {rating >= 3? (
               <IoIosStar id="nyota" onClick={() => setRating(3)} />
           ):(
               <IoIosStarOutline id="nyota" onClick={() => setRating(3)} />
           )}
           {rating >= 4? (
               <IoIosStar id="nyota" onClick={() => setRating(4)} />
           ):(
               <IoIosStarOutline id="nyota" onClick={() => setRating(4)} />
           )}
           {rating >= 5? (
               <IoIosStar id="nyota" onClick={() => setRating(5)} />
           ):(
               <IoIosStarOutline id="nyota" onClick={() => setRating(5)} />
           )}

       </Container>
    )
}

export default Rating;

