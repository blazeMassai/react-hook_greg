import React from 'react';
// import Rating from "./Rating";


function Products() {

    const products = ["Big Bible: KJV", "Rhapsody of realities: Pastor Chris", "When God visits you: Pastor Chris", "God's answer's to Life's Question: Rick Warren"];
    const listProducts = products.map((product)=>
        <li key={product.toString()}><strong>{product}</strong> <br/>

        </li>
    );

    return(
        <div className='container-fluid'>
            <div className="container text-center">
                <ol>{listProducts}</ol>
            </div>


        </div>
    )
}

export default Products;