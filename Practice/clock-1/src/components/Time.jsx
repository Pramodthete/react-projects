function Time(){
    let time = new Date();
    return (
    <div>
        <h3 className="lead">This is the current Date : </h3>
        {time.toLocaleDateString()}
        <h3 className="lead">This is the current Time : </h3>
        {time.toLocaleTimeString()}
    </div>
        
    )
}
export default Time;