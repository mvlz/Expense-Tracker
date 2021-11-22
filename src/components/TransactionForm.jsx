import { IoCloseSharp } from "react-icons/io5";
import { useState} from "react";

const TransactionForm = ({ addTransaction ,setIsShow,categories}) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: "",
    desc: "",
    category:"",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
    if (formValues.desc === "") {
      alert("Write transaction describtion");
    } else if (formValues.amount === "" || !formValues.amount) {
      alert("Add Amount");
    } else if (formValues.category === "") {
      alert("Choose category");
    } else {
      addTransaction(formValues);
    }
    if (submitHandler) {
      setIsShow(false);
    }
  };
  const closeHandler = () => {
    setIsShow(false)
  };
  return (
    <div className="modal-form">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Write your transaction"
          type="text"
          name="desc"
          onChange={changeHandler}
          value={formValues.desc}
        />
        <input
          placeholder="amount"
          type="number"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
        />
        <div className="radio-box">
          <label htmlFor="expense-input">
            Expense
            <input
              type="radio"
              name="type"
              value="expense"
              id="expense-input"
              checked={formValues.type === "expense"}
              onChange={changeHandler}
            />
          </label>

          <label htmlFor="income-input">
            Income
            <input
              type="radio"
              name="type"
              value="income"
              id="income-input"
              checked={formValues.type === "income"}
              onChange={changeHandler}
            />
          </label>
        </div>
        <select onChange={changeHandler} name="category">
          <option value="" disabled selected>Choose Category</option>
          {
            categories.map(c=>{
              return <option key={c.id} value={c.title}>{c.title}</option>
            })
          }
        </select>
        <button type="submit" className="transaction-btn btn" >
          Add Transaction
        </button>
      </form>
    <IoCloseSharp onClick={closeHandler} className="close-btn" />
    </div>
  );
};

export default TransactionForm;
