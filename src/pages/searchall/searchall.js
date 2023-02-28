import "./searchall.css";
import SearchItem from "../../components/searchitem/searchitem";
import useFetch from "../../hooks/useFetch";
import {Link } from "react-router-dom";

const ListAll = () => {



  const {data, loading } = useFetch("/api/v1.0/Employees")

  return (
      <div>
        <div className="listContainer">
         
         <Link to="/search"> <button className="searchbutton">Search </button></Link>
        <div className="listWrapper">
          <div className="listResult">
            {loading ? "Loading" : <>
            {data.map(item=>(
              <SearchItem item={item} key={item._id}/>
            ))}
            
            </>} 
          </div>
        </div>
      </div>
      </div>




  )
}

export default ListAll

