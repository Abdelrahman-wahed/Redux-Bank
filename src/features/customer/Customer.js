import { useSelector } from "react-redux";
 function stringToStars(id) {
    const str =String(id)
    
   return str.trim()
      .split("")
      .map((e, i) => (i < 3 || i >= str.split("").length - 3 ? e : "*"))
      .join(""); 
  }
function Customer() {
  const { fullName,nationalID } = useSelector((store) => store.customer);
  return <h2>👋 Welcome, {fullName}  Your ID is {stringToStars(nationalID)}</h2>;
}

export default Customer;
