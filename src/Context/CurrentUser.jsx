import { createContext, useState } from "react";

export const currentUser = createContext("");

// eslint-disable-next-line react/prop-types
const CurrentSer = ({ children }) => {
  const [userContext, setUserContext] = useState("");
  return (
    <currentUser.Provider 
// @ts-ignore
    value={{ userContext, setUserContext }}>
      {children}
    </currentUser.Provider>
  );
};

export default CurrentSer;
