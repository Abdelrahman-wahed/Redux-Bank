import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();
  function handleSubmition(e) {
    e.preventDefault();
    if(!fullName || ! nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
    setFullName("")
    setNationalId("")
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
          type="password"
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
