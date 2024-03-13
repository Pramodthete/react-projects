//Header.js
import React from "react";

function Header(props){
    console.warn("In header", props);

    return (
        <div>
            <h1>E-Commerce</h1>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <                                                 img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/08/Shopping-cart-add-to-cart-icon-design-Graphics-13103155-1.jpg"/>
            </div>
        </div>
    )
}

export default Header;