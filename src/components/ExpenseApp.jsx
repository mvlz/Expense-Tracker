import { useEffect , useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponents";
import TransactionForm from "./TransactionForm";

const ExpenseApp = () => {
  const [isShow, setIsShow] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (formValues) => {
      const id = {...formValues, id: transactions.length + 1}
      setTransactions([...transactions, id]);
    //   console.log(transactions)
  };
  const showHandler = () => {
    setIsShow(!isShow);
  };

  useEffect(()=>{
    let exp = 0;
    let inc = 0;
    transactions.forEach(t=> t.type === "expense" ? exp = parseFloat(t.amount) + exp : inc= parseFloat(t.amount) + inc)
    setIncome(inc)
    setExpense(exp)
  },[transactions])
  
  return (
    <section className="wrapper">
      {isShow && <TransactionForm  addTransaction={addTransaction} setIsShow={setIsShow} />}
      <div className="sidebar">
        <button onClick={showHandler} className="transaction-btn">
          + Add Transaction
        </button>
        
        <OverViewComponent expense={expense} income={income} />
      </div>
      <div className="container">
        <TransactionComponent transactions={transactions} />
      </div>
    </section>
  );
};

export default ExpenseApp;
