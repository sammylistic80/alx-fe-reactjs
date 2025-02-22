import { createContext } from "react";

// Provide a default object to avoid null errors
export const UserContext = createContext({
  name: "Guest",
  email: "guest@example.com",
});

export default UserContext;