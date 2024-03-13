//Home.js
import React from "react";

function Home(props) {
    console.warn("In home", props);
    return (
        <div>
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img.etimg.com/photo/msid-99080504/samsung-galaxy-a14-5g.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.0
                    </span>

                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: 'I phone 11' })}>Add To Cart</button>

                    <button className="remove-cart-btn" onClick={() => props.removeFromCartHandler()}>Remove From Cart</button>
                </div>
            </div>
            <br/>
        </div>
    )
}
export default Home;