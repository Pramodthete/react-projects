import Item from "./Item";
function Map({items}) {
    
    return (
        <>
            <h3>Healthy Foods by Map</h3>
            <ul className="list-group">

                {
                items.map((item) => 
                    <Item key={item} foodItem={item}></Item>
                )}

                {/* key is very Imp for DOM to fetch record by key to improve performance */}

            </ul>
        </>
    )
}
export default Map;