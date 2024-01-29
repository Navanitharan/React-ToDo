/* eslint-disable react/prop-types */
import {useState, useRef } from "react";

function Filter ({filter}) {
  const dropdownButtonRef = useRef(null);
  const[filterState,setFilterState] = useState("All");
  const updateStatus = (newStatus) => {
    console.log(newStatus);
    setFilterState(newStatus);
    filter(newStatus);
    // Close the dropdown
    if (dropdownButtonRef.current) {
      dropdownButtonRef.current.click();
    }
  };
  
return(
    <div className="todo-section">
    <div className="todo-head d-flex justify-content-between">
      <h3>My Todos</h3>
      <div className="filter d-flex">
        <p>Filter</p>
        <button ref={dropdownButtonRef} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {filterState}
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" onClick={()=>{{updateStatus("All");}}}>All</a></li>
          <li><a className="dropdown-item" href="#" onClick={()=>{{updateStatus("Completed");}}}>Completed</a></li>
          <li><a className="dropdown-item" href="#" onClick={()=>{{updateStatus("Not Completed");}}}>Not Completed</a></li>
        </ul>
      </div>
    </div>
  </div>
)
}
export default Filter 