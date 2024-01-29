function AddTodo() {
    return (
        <div className="container">
            <div className="row KgRow">
                <div className="col-4">
                    <input type="text" placeholder='Enter Task' />
                </div>
                <div className="col-4">
                    <input type="date" />
                </div>
                <div className="col-2">
                    <button className="btn btn-success mybtn">Add</button>
                </div>
            </div>
        </div>
    )
}
export default AddTodo;