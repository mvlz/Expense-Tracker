import { useEffect , useState } from "react";
import CategoriesComponent from "./CategoriesComponent";
import CategoriesForm from "./CategoriesForm";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponents";
import TransactionForm from "./TransactionForm";

const ExpenseApp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShoww, setIsShoww] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories]=useState([{title:"taxi", color:"ffdd00" ,id:1},{title:"gym", color:"04ff00",id:2,}]);

  const addTransaction = (formValues) => {
    const catColor = categories.find(c => c.title === formValues.category)
    const id = {...formValues, id: transactions.length + 1, color: catColor.color}
      setTransactions([...transactions, id]);
  };
  const showHandler = () => {
    setIsShow(!isShow);
  };
  const showHandlerr = () => {
    setIsShoww(!isShoww);
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
      {isShow && <TransactionForm  addTransaction={addTransaction} setIsShow={setIsShow} categories={categories} />}
      {isShoww && <CategoriesForm  addTransaction={addTransaction} setIsShoww={setIsShoww} />}
      <div className="sidebar">
        <button onClick={showHandler} className="transaction-btn btn">
          + Add Transaction
        </button>
        
        <OverViewComponent expense={expense} income={income} />
      </div>
      <div className="container">
        <CategoriesComponent  setIsShoww={setIsShoww} showHandlerr={showHandlerr} />
        <TransactionComponent transactions={transactions} />
      </div>
    </section>
  );
};

export default ExpenseApp;
