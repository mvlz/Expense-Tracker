const TransactionComponent = ({transactions}) => {
    return ( 
        <div>
            <h3>Transactions</h3>
            <div>
                {transactions.map(transaction =>{
                    return <h4 key={transaction.id} >hi its transaction {transaction.id}</h4>
                })}
            </div>
        </div>
     );
}
 
export default TransactionComponent;