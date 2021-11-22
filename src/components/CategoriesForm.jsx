
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CategoriesForm = ({setIsShoww,addCategory}) => {
  const [catVal,setCatVal]= useState({title:"",color: ""})
  const submitHandler = (e) => {
    e.preventDefault();
    if(catVal.title ===""){
      alert("Add Category inf")
    } else if(catVal.color ===""){
      alert("Add Category color")
    } else{
      addCategory(catVal);
    }
    setIsShoww(false)
  };
  
  const closeHandler = () => {
    setIsShoww(false)
  };
  const changeHandler=(e)=>{
    console.log(e.target.value)
    setCatVal({...catVal,[e.target.name]: e.target.value})
    // console.log(catVal);
  }
  
  return (
    <div className="modal-form">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Category Name"
          type="text"
          name="title"
          onChange={changeHandler}
        />
        <input
          placeholder="color"
          type="color"
          name="color"
          onChange={changeHandler}
        />
        <button type="submit" className="categories-btn btn">
          Add Category
        </button>
      </form>
    <IoCloseSharp onClick={closeHandler} className="close-btn" />
    </div>
  );
};

export default CategoriesForm;
