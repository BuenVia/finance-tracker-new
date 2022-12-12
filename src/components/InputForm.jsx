import { useState } from "react"

export default function InputForm(props) {

    const [message, setMessage] = useState({
        text: '',
        color: ''
    })
    const [formDetails, setFormDetails] = useState({
        type: '',
        amount: '',
        cat: '',
        item: '',
        date: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormDetails(prevVals => {
            return {
                ...prevVals,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault()
        if (formDetails.amount === '' || formDetails.cat === '' || formDetails.date === '' || formDetails.item === '' || formDetails.type === '') {
            setMessage({
                text: "Please fill in all fields",
                color: 'red'
            })
        } else {
            props.addItem(formDetails);
            setFormDetails({
                type: '',
                amount: '',
                cat: '',
                item: '',
                date: ''
            })
            setMessage('')
        }
    }

    function handleClear(e) {
        e.preventDefault()
        setFormDetails({
            type: '',
            amount: '',
            cat: '',
            item: '',
            date: ''
        })
    }

    return (
        <div className="section">
            <h4>Input Form</h4>
            <p style={{color: message.color}}>{message.text}</p>
            <form className="row">
                <div className="col-md-2">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select name="type" className="form-control" onChange={handleChange} value={formDetails.type}>
                        <option value="">--SELECT--</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" name="amount" className="form-control" placeholder="00.00" min="0" onChange={handleChange} value={formDetails.amount}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="cat" className="form-label">Category</label>
                    <select name="cat" className="form-control" onChange={handleChange} value={formDetails.cat}>
                        <option value="">--SELECT--</option>
                        <option value="rent">Rent</option>
                        <option value="car">Car</option>
                        <option value="utility">Utility</option>
                        <option value="eating out">Eating Out</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="item" className="form-label">Item</label>
                    <input type="text" name="item" className="form-control" onChange={handleChange} value={formDetails.item}/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" name="date" className="form-control" onChange={handleChange} value={formDetails.date}/>
                </div>
                <div className="input-form-btns">
                    <button className="btn btn-success" onClick={handleClick}>Submit</button>
                    <button className="btn btn-danger" onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
    )
}