import { useState } from "react";

const TransactionForm = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  return (
    <div>
      <form>
        <input type="text" name="desc" />
        <input type="number" name="mount" />
        <div>
          <label htmlFor="expense-input">expense</label>
          <input type="radio" name="type" value={expense} id="expense-input" />

          <label htmlFor="income-input">income</label>
          <input type="radio" name="type" value={income} id="income-input" />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
