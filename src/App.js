import { useState } from "react"
import Header from "./components/Header"
import InputForm from "./components/InputForm"
import ItemBox from "./components/ItemBox"
import SummaryBox from "./components/SummaryBox"

export default function App() {

  const [itemArr, setItemArr] = useState([])
  const [totals, setTotals] = useState({
    credit: 0,
    debit: 0
  })


  function addItem(item) {
    item.id = itemArr.length 

    // Adds to the totals
    setTotals(prevVals => {
      if (item.type === 'credit') {
        return {
          ...prevVals,
        credit: prevVals.credit + parseFloat(item.amount)
        }
      } else if (item.type === 'debit') {
        return {
          ...prevVals,
          debit: prevVals.debit + parseFloat(item.amount)
        }
      }
      
      return {
        ...prevVals,
        [item.type]: parseFloat(item.amount)
      }
    })

    // Adds each new item to itemArr
    setItemArr(prevVals => {
      return [...prevVals, item]
    })
  }

 // Delete item
  function delItem(res) {
    const x = JSON.parse(res)
    setItemArr(prevVals => {
      return prevVals.filter(item => item.id !== x.id)
    })
    setTotals(prevVals => {
      if(x.type === 'credit') {
        return {
          ...prevVals,
          credit: prevVals.credit - x.amount
        }
      } else if (x.type === 'debit') {
        return {
          ...prevVals,
          debit: prevVals.debit - x.amount
        }
      }
    })
  }

  return (
    <div>
      <Header />
      <div className="container">
        <InputForm addItem={addItem} />
        <SummaryBox totals={totals} />
        <ItemBox items={itemArr} delItem={delItem} />
      </div>
    </div>
  )
}

// Build item array
// Show summary
// Show items list