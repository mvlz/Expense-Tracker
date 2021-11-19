import { useState } from "react";

const TransactionForm = ({ addTransaction ,setIsShow}) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: "",
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
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
        <button type="submit" className="transaction-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
