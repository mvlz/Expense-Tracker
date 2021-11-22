import { useEffect , useState } from "react";
import CategoriesComponent from "./CategoriesComponent";
import CategoriesForm from "./CategoriesForm";
import Search from "./header/SearchComponent";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponents";
import TransactionForm from "./TransactionForm";

const ExpenseApp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShoww, setIsShoww] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories]= useState([{title:"taxi", color:"#ffdd00" ,id:1},{title:"gym", color:"#FE7799",id:2,}]);
  const [search,setSearch]=useState("");
  const [filtered,setFiltered]=useState(transactions)

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
  const addCategory = (catVal) => {
    const id = {...catVal, id: categories.length + 1}
      setCategories([...categories, id]);
  };
  useEffect(()=>{
    let exp = 0;
    let inc = 0;
    transactions.forEach(t=> t.type === "expense" ? exp = parseFloat(t.amount) + exp : inc= parseFloat(t.amount) + inc)
    setIncome(inc)
    setExpense(exp)
    filterTransaction(search)
  },[transactions])
  
  const searchHandler=(e)=>{
    setSearch(e.target.value);
    filterTransaction(e.target.value)
  }
  const filterTransaction=(search)=>{
    if(!search || search ===""){
      setFiltered(transactions)
      return
    }
    const filters= transactions.filter(t => t.desc.toLowerCase().includes(search.toLowerCase()))
    setFiltered(filters)
  }
  return (
    <section className="wrapper">
      {isShow && <TransactionForm  addTransaction={addTransaction} setIsShow={setIsShow} categories={categories} />}
      {isShoww && <CategoriesForm  addTransaction={addTransaction} setIsShoww={setIsShoww} addCategory={addCategory} />}
      <div className="sidebar">
        <button onClick={showHandler} className="transaction-btn btn">
          + Add Transaction
        </button>
        
        <OverViewComponent expense={expense} income={income} />
      </div>
      <div className="container">
      <Search searchHandler={searchHandler} search={search} />
        <CategoriesComponent showHandlerr={showHandlerr} categories={categories} />
        <TransactionComponent transactions={filtered} />
      </div>
    </section>
  );
};

export default ExpenseApp;
