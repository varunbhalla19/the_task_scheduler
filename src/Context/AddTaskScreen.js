import React, { useState, createContext } from "react";

export const ShowHideContext = createContext({
  hidden: true,
  hide: () => {},
  comp: null,
  setComponent: () => {},
});

export default ({ children }) => {
  const [hidden, hide] = useState(true);

  const [comp, setComp] = useState(null);

  // console.log("Comp set to ", comp);

  return (
    <ShowHideContext.Provider
      value={{
        hidden,
        hide: () => hide(!hidden),
        setComponent: (component) => {
          hide(false);
          setComp(component);
        },
        comp: comp,
      }}
    >
      {children}
    </ShowHideContext.Provider>
  );
};
