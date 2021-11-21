import { IoBarbell } from "react-icons/io5";
const TransactionComponent = ({transactions}) => {
    return ( 
        <div>
            <h3 className="title">Transactions</h3>
            <div className="transaction-container">
                {transactions.map(transaction => {
                    return (
                      <div className="transaction-box" key={transaction.id}>
                            <div className="box-left">
                                <div className="trans-pic" style={{backgroundColor:`#${transaction.color}` }}> <IoBarbell /> </div>
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