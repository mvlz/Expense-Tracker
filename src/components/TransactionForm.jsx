import { useState } from "react";

const TransactionForm = ({addTransaction}) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler=(e)=>{
    e.preventDefault()
    addTransaction(formValues);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="desc"
          onChange={changeHandler}
          value={formValues.desc}
        />
        <input
          type="number"
          name="mount"
          onChange={changeHandler}
          value={formValues.amount}
        />
        <div>
          <label htmlFor="expense-input">expense</label>
          <input
            type="radio"
            name="type"
            value="expense"
            id="expense-input"
            checked={formValues.type === "expense"}
            onChange={changeHandler}
          />

          <label htmlFor="income-input">income</label>
          <input
            type="radio"
            name="type"
            value="income"
            id="income-input"
            checked={formValues.type === "income"}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
