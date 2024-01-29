function TodoItem1() {
    let task='Buy Milk';
    let date='04/10/2023';
    return (
        <div className="container">

            <div className="row KgRow">
                <div className="col-4">
                    {task}
                </div>
                <div className="col-4">
                    {date}
                </div>
                <div className="col-2">
                    <button className="btn btn-danger mybtn">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem1;