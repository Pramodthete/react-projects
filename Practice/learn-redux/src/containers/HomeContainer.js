//HomeContainer.js
import {connect} from 'react-redux';
import Home from "../components/Home";
import {addToCart,removeFromCart} from '../service/actions/actions';

const mapStateToProps=state=>({ 
    data:state.cartItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)//early call


// export default Home;