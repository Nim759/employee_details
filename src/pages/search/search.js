import "./search.css";
import SearchItem from "../../components/searchitem/searchitem";
import {useState, userId} from 'react';

import useFetch from "../../hooks/useFetch";

const List = () => {

 
  const id = userId();
  const [idnumber, setIdnumber] = useState(id.state)

  const handleClick = () => {
    reFetch()
  }

  const {data, loading, reFetch} = useFetch(`http://localhost:5000/api/v1/employees?empNum=${idnumber}`)

  return (
    <div>
     
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="lsItem">
              <label>Employee ID</label>
              <input type="text" 
              className="searchbar"
              placeholder={idnumber}
              onChange={e=>setIdnumber(e.target.value)}
              />
            </div>
            <div>
              <button  className="sbtn" onClick={handleClick}><b>Search</b></button>
            </div>
            

          </div>
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

export default List