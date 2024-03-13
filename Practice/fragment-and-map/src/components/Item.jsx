
import Style from './Item.module.css'

function Item({foodItem}){
    // let {foodItem}=props;
    return(
            <li className={`${Style['kg-item']}`}>
                <span className={Style['kg-span']}>{foodItem}</span> 
            </li>
    )
}
export default Item;