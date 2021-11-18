import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponents";
import TransactionForm from "./TransactionForm";

const ExpenseApp = () => {
  const [modal, setModal] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (formValues) => {
      const id = {...formValues, id: transactions.length + 1}
      setTransactions([...transactions, id]);
    //   console.log(transactions)
  };
  const showHandler = () => {
    setModal(!modal);
  };
  return (
    <section className="wrapper">
      <div className="sidebar">
        <button onClick={showHandler} className="transaction-btn">
          + Add Transaction
        </button>
        {modal && <TransactionForm  addTransaction={addTransaction}/>}
        <OverViewComponent expense={expense} income={income} />
      </div>
      <div className="container">
        <TransactionComponent transactions={transactions} />
      </div>
    </section>
  );
};

export default ExpenseApp;
