import { useState } from "react";
import { useDispatch } from "react-redux";
import {createCustomer} from './CustomerSlice'
function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
const dispatch= useDispatch();
  function handleSubmition() {
    if(!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId,new Date().toISOString()));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <form className="inputs" onSubmit={handleSubmition}>
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button >Create new customer</button>
      </form>
    </div>
  );
}

export default Customer;
