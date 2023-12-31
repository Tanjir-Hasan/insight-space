import React, { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext(null);

const TeamProvider = ({ children }) => {
  const [place, SetPlace] = useState(null);
  const Infos = {
    place,
    SetPlace,
  };
  return <UserContext.Provider value={Infos}>{children}</UserContext.Provider>;
};

export default TeamProvider;