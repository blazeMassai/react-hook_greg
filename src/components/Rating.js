import React, { useState } from "react";
import {Container} from "react-bootstrap";
import {IoIosStar, IoIosStarOutline} from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';



function Rating(props) {

    const [rating, setRating] = useState(props.rating)

    return(
       <Container >
           <h3>Rating: {rating} </h3>
           {rating >= 1? (
               <IoIosStar onClick={() => setRating(1)} />
           ):(
               <IoIosStarOutline onClick={() => setRating(1)} />
           )}
           {rating >= 2? (
               <IoIosStar onClick={() => setRating(2)} />
           ):(
               <IoIosStarOutline onClick={() => setRating(2)} />
           )}
           {rating >= 3? (
               <IoIosStar onClick={() => setRating(3)} />
           ):(
               <IoIosStarOutline onClick={() => setRating(3)} />
           )}
           {rating >= 4? (
               <IoIosStar onClick={() => setRating(4)} />
           ):(
               <IoIosStarOutline onClick={() => setRating(4)} />
           )}
           {rating >= 5? (
               <IoIosStar onClick={() => setRating(5)} />
           ):(
               <IoIosStarOutline onClick={() => setRating(5)} />
           )}

       </Container>
    )
}

export default Rating;

