const OverViewComponent = ({income, expense}) => {
    return ( 
        <div className="overview">
            <div className="income-box box">
                <p>Income</p>
                <p className="amount">${income}</p>
            </div>
            <div className="income-box box">
                <p>Expense</p>
                <p className="amount">${expense}</p>
            </div>
        </div>
     );
}
 
export default OverViewComponent;