import { IoAddSharp } from "react-icons/io5";
const CategoriesComponent = ({showHandlerr,categories}) => {
    const clickHandler=()=>{
        showHandlerr();
    }
    return (
        <div>
            <h3 className="title">Categories</h3>
            <div className="categories-container">
                {categories.map(c=>{
                    return <button className="btn cat-btn" key={c.id} style={{backgroundColor: c.color }}>{c.title}</button>
                })}
                <button type="submit" className="categories-btn btn" onClick={clickHandler}>
                    <IoAddSharp />  Add New
                </button>
            </div>
        </div>
    );
}
 
export default CategoriesComponent;