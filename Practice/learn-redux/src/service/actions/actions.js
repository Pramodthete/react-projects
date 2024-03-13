//action.js
import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants'


export const addToCart=(data)=>{
    console.warn('In action add',data);
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeFromCart=()=>{
    console.warn('In action remove');
    return {
        type:REMOVE_FROM_CART
    }
}