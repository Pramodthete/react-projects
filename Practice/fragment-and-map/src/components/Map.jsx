
function Map() {
    let HealthyFoods = ['Dal', 'Green Vegies', 'Soya', 'Roti', 'Milk', 'Salad'];
    return (
        <>
            <h3>Healthy Foods by Map</h3>
            <ul className="list-group">

                {HealthyFoods.map((item) => 
                    (<li key={item} className="list-group-item">{item}</li>)
                )}

                {/* key is very Imp for DOM to fetch record by key to improve performance */}

            </ul>
        </>
    )
}
export default Map;