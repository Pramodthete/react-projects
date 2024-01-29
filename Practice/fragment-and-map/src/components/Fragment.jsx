function Fragment() {
    // <></> These called fragments
    // It helps to avoid getting one more tag like div

    return (
        <>
            <h3>Healthy Foods by ul list</h3>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul><br />
        </>)
}
export default Fragment;