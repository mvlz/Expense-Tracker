import { IoAddSharp } from "react-icons/io5";
const CategoriesComponent = ({showHandlerr}) => {
    const clickHandler=()=>{
        showHandlerr();
    }
    return (   
        <div>
        <h3 className="title">Categories</h3>
        <div className="categories-container">
        <button type="submit" className="categories-btn btn" onClick={clickHandler}>
          <IoAddSharp />  Add New
        </button>
        </div>
    </div>
     );
}
 
export default CategoriesComponent;