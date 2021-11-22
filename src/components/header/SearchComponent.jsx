import { IoSearch } from "react-icons/io5";

const Search = ({search,searchHandler}) => {
  
    return (   
        <div className="search-box">
            <label htmlFor="search-input"><IoSearch /></label>
            <input type="text" placeholder="Search" onChange={searchHandler} value={search} className="search-input" id="search-input" />
        </div>
     );
}
 
export default Search;