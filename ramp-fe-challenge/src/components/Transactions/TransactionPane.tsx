import { useState } from "react"
import { InputCheckbox } from "../InputCheckbox"
import { TransactionPaneComponent } from "./types"
// import mockdata from "../../mock-data.json"
import {setTransactionApproval, data} from "../../utils/requests"
import { Transaction } from "src/utils/types"

export const TransactionPane: TransactionPaneComponent = ({
  transaction,
  loading,
  setTransactionApproval: consumerSetTransactionApproval,
}) => {
  const [approved, setApproved] = useState(transaction.approved)




  return (
    <div className="RampPane">
      <div className="RampPane--content">
        <p className="RampText">{transaction.merchant} </p>
        <b>{moneyFormatter.format(transaction.amount)}</b>
        <p className="RampText--hushed RampText--s">
          {transaction.employee.firstName} {transaction.employee.lastName} - {transaction.date}
        </p>
      </div>
      <InputCheckbox
        id={transaction.id}
        checked={approved}
        disabled={loading}
        onChange={async (newValue) => {
          await consumerSetTransactionApproval({
            transactionId: transaction.id,
            newValue,
          })
          // console.log(newValue)
          // console.log(mockdata.transactions[1].approved = true)
          // console.log(setApproved(newValue))
          // console.log(transaction.id)
          const transactionFind: Transaction | undefined = data.transactions.find(
            (currentTransaction) => currentTransaction.id === transaction.id
          )
          // transactionFind.approved = newValue
          // console.log(transactionFind)
          // console.log(transactionFind?.approved = newValue)
          if (transactionFind != undefined) {
            transactionFind.approved = newValue
          }

          setApproved(newValue)
        }}
      />
    </div>
  )
}

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})
