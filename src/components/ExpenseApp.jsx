import { useState } from "react";
import ModalForm from "./TransactionForm";

const ExpenseApp = () => {
    const [modal,setModal]=useState(false)
    const showHandler=()=>{
        setModal(!modal);
    }
    return ( 
        <section>
            <button onClick={showHandler}>+ Add Transaction</button>
            {modal && <ModalForm />}
        </section>
     );
}
 
export default ExpenseApp;