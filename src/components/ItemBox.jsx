export default function ItemBox(props) {

    function handleClick(e) {
        props.delItem(e.target.value)
    }

    // Capitalize all first letters
    function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="section">
            {props.items.length === 0 ? 
                <div className="message">
                    <p>Nothing spent</p>
                </div> 
                :
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Item</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead> 
                    <tbody>
                        {props.items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{caps(item.type)}</td>
                                    <td className={item.type === 'credit' ? 'credit' : 'debit'}>£{item.amount}</td>
                                    <td>{caps(item.cat)}</td>
                                    <td>{caps(item.item)}</td>
                                    <td>{new Date(item.date).toDateString()}</td>
                                    <td><button className="btn btn-danger" value={JSON.stringify(item)} onClick={handleClick}>Del</button></td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
                }
        </div>
    )
}