export default function ItemBox(props) {
    return (
        <div className="section">
            {props.items.length === 0 ? 
                <div className="message">
                    <p>Nothing spent</p>
                </div> 
                :
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Item</th>
                            <th>Date</th>
                            <th>Del</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {props.items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.type}</td>
                                    <td>£{item.amount}</td>
                                    <td>{item.cat}</td>
                                    <td>{item.item}</td>
                                    <td>{new Date(item.date).toDateString()}</td>
                                    <td>x</td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
                }
        </div>
    )
}