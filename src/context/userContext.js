import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userDb, setUserDb] = useState();

  const defaultContext = {
    userDb,
    setUserDb,
  };

  return <UserContext.Provider value={defaultContext}>{props.children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
