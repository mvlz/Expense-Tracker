const TransactionComponent = ({transactions}) => {
    return ( 
        <div className="transaction-div">
            <h3 className="title">Transactions</h3>
            <div className="transaction-container">
                {transactions.map(transaction => {
                    return (
                      <div className="transaction-box" key={transaction.id}>
                            <div className="box-left">
                                <div className="trans-pic" style={{backgroundColor: transaction.color}}> <p>{transaction.category.toUpperCase()}</p> </div>
                                <div>
                                    <h4 className="trans-desc">{transaction.desc}</h4>
                                    <p className="trans-date">4 Feb {transaction.category}</p>
                                </div>
                            </div>
                            <p style={{fontWeight: "500", color: transaction.type === "expense" ? "red": "green"}}>{transaction.type === "expense" ? "-" :"+"}${transaction.amount}</p>
                        </div>
                    );
                })}
            </div>
        </div>
     );
}
 
export default TransactionComponent;