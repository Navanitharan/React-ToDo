/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

function Card({card ,edit,del}) {
  const [status, setStatus] = useState(card.status);
  const [btnStyle, setBtnStyle] = useState(`btn ${status === 'Completed' ? 'btn-success' : 'btn-danger'} dropdown-toggle`);
  const dropdownButtonRef = useRef(null);

  //Toggle the color of the status button
  const updateStatus = (newStatus) => {
    console.log(newStatus);

    // Update status and button style
    setStatus(newStatus);
    card.status=newStatus;
    setBtnStyle(`btn ${newStatus === 'Completed' ? 'btn-success' : 'btn-danger'} dropdown-toggle`);

    // Close the dropdown
    if (dropdownButtonRef.current) {
      dropdownButtonRef.current.click();
    }
  };

  return (
    <div className="card col-3 p-3 mt-4">
      <p>Name: {card.name}</p>
      <p>Description: {card.decs}</p>

      <div className="filter d-flex justify-content-start">
        <p>Status:</p>
        <button
          ref={dropdownButtonRef}
          className={btnStyle}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {status}
        </button >
        <ul className="dropdown-menu ">
          {status === 'Completed' ? 
          (
            <li>
              <a className="dropdown-item" href="#" onClick={() => { updateStatus('Not Completed') }}>Not Completed</a>
            </li>
          ) 
          : 
          (
            <li>
              <a className="dropdown-item" href="#" onClick={() => { updateStatus('Completed') }}>Completed</a>
            </li>
          )}
        </ul>
      </div>

      <div className="update d-flex gap-2 justify-content-end">
        <button className="btn btn-primary" onClick={()=>{edit(card)}}>Edit</button>
        <button className="btn btn-danger" onClick={()=>{del(card)}}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
