import { useCallback } from "react"
import { useCustomFetch } from "src/hooks/useCustomFetch"
import { SetTransactionApprovalParams } from "src/utils/types"
import { TransactionPane } from "./TransactionPane"
import { SetTransactionApprovalFunction, TransactionsComponent } from "./types"
import {setTransactionApproval, data} from "../../utils/requests"


export const Transactions: TransactionsComponent = ({ transactions }) => {
  const { fetchWithoutCache, loading } = useCustomFetch()

  const setTransactionApprovalFetch = ( transactionId: string, value: boolean )  => {
    const transaction = data.transactions.find(
      (currentTransaction) => currentTransaction.id === transactionId
    )
    if (!transaction) {
      throw new Error("Invalid transaction to approve")
    }
    transaction.approved = value
    console.log("transPane " + (transactionId))
    console.log("transPane approved " + (transaction.approved))
  }
  
  const setTransactionApproval = useCallback<SetTransactionApprovalFunction>(
    async ({ transactionId, newValue }) => {
      await fetchWithoutCache<void, SetTransactionApprovalParams>("setTransactionApproval", {
        transactionId,
        value: newValue,
      })
      console.log(newValue)
      setTransactionApprovalFetch(transactionId, newValue);

    },
    [fetchWithoutCache]
  )

  if (transactions === null) {
    return <div className="RampLoading--container">Loading...</div>
  }
  // console.log(transactions);
  // console.log(setTransactionApproval);

  return (
    <div data-testid="transaction-container">
      {transactions.map((transaction) => (
        <TransactionPane
          key={transaction.id}
          transaction={transaction}
          loading={loading}
          setTransactionApproval={setTransactionApproval}
        />
      ))}
    </div>
  )
}
