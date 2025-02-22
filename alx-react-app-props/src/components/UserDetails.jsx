import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserDetails = () => {
  const userData = useContext(UserContext); // Access context

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Age:</strong> {userData.age}</p>
    </div>
  );
};

export default UserDetails;