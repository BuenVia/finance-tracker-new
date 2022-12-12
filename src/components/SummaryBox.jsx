export default function SummaryBox(props) {
    return (
        <div className="section summary">
            {console.log(props)}
            <p>Total Spent: £{props.totals.credit - props.totals.debit}</p>
            <p>Total Debit: -£{props.totals.debit}</p>
            <p>Total Credit: +£{props.totals.credit}</p>
        </div>
    )
}