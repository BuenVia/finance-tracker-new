export default function SummaryBox(props) {
    
    let col

    if ((props.totals.credit - props.totals.debit) > 0) {
        col = 'green'
    } else if ((props.totals.credit - props.totals.debit) < 0) {
        col = 'red'
    } else {
        col = 'white'
    }

    return (
        <div className="section summary">
            {console.log(props)}
            <p style={{color: col}}>Total Spent: £{props.totals.credit - props.totals.debit}</p>
            <div>
                <p className="credit">Total Credit: +£{props.totals.credit}</p>
                <p>Number of Credits: {props.totals.creditTotal}</p>
                <p>Avg. Credit: £{props.totals.credit === 0 ? '0' : (props.totals.credit / props.totals.creditTotal).toFixed(2)}</p>
            </div>
            <div>
                <p className="debit">Total Debit: -£{props.totals.debit}</p>
                <p className="">Number of Debits: {props.totals.debitTotal}</p>
                <p>Avg. Debit: £{props.totals.debit === 0 ? '0' : (props.totals.debit / props.totals.debitTotal).toFixed(2)}</p>
            </div>
        </div>
    )
}