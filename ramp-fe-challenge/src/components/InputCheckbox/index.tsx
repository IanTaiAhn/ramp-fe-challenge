import classNames from "classnames"
import { check } from "prettier"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"
import {setTransactionApproval, data} from "../../utils/requests"


export const InputCheckbox: InputCheckboxComponent = ({ id, checked = true, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const setTransactionApprovalFetch = ( transactionId: string | number, value: boolean )  => {
    const transaction = data.transactions.find(
      (currentTransaction) => currentTransaction.id === transactionId
    )
    if (!transaction) {
      throw new Error("Invalid transaction to approve")
    }
    // console.log("trans before: " + (transaction))
    console.log(transaction)
    transaction.approved = value
    console.log(transaction)
    console.log("transPane " + (transactionId))
    console.log("transPane approved " + (transaction.approved))
  }

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => {
          onChange(!checked) 

          // setTransactionApprovalFetch(id, boolTest);
          
          // onChange(!disabled);
          // console.log(!checked)
          
          // console.log(disabled)
        }}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          // onChange(!checked)
          // console.log(inputId)

          // console.log(checked)
        }}
        // onClick={() => {
        //   onChange(!checked) 
        //   // onChange(!disabled);
        //   // console.log(checked)
        
        //   // console.log(disabled)
        // }}
      />
    </div>
  )
}
