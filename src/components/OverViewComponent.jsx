const OverViewComponent = ({income, expense}) => {
    return ( 
        <div className="overview">
            <div className="balance-box box">
                <p className="overview-title">Balance</p>
                <p className="amount">${income - expense}</p>
            </div>
            <div className="income-box box">
                <p className="overview-title">Income</p>
                <p className="amount">{income > 0 && "+"} ${income}</p>
            </div>
            <div className="expense-box box">
                <p className="overview-title">Expense</p>
                <p className="amount">{income > 0 && "-"}${expense}</p>
            </div>
        </div>
     );
}
 
export default OverViewComponent;