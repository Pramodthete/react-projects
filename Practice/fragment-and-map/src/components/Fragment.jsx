
import Item from "./Item";

function Fragment({items}) {
    // <></> These called fragments
    // It helps to avoid getting one more tag like div (avoid memory store)

    return (
        <>
            <h3>Healthy Foods by ul list</h3>
            <ul className="list-group">
                {items.map((item)=>
                    <Item key={item} foodItem={item}></Item>
                )}
                
            </ul><br />
        </>)
}
export default Fragment;