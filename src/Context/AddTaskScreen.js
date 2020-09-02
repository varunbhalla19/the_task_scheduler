import React, { useState, createContext } from "react";

export const ShowHideContext = createContext({
  hidden: true,
  hide: () => {},
});

export default ({ children }) => {
  const [ hidden, hide] = useState(true);

  return (
    <ShowHideContext.Provider
      value={{
        hidden,
        hide: () => hide(!hidden),
      }}
    >
      {children}
    </ShowHideContext.Provider>
  );
};
