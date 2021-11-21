
import { IoCloseSharp } from "react-icons/io5";

const CategoriesForm = ({setIsShoww}) => {

  const submitHandler = (e) => {
    e.preventDefault();
    setIsShoww(false)
  };
  const closeHandler = () => {
    setIsShoww(false)
  };
  return (
    <div className="modal-form">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Category Name"
          type="text"
        />
        <input
          placeholder="color"
          type="color"
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
