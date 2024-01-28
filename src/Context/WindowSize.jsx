import { createContext, useState, useEffect } from "react";

export const WindowSize = createContext(null);

// eslint-disable-next-line react/prop-types
const Window = ({children}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function setWindowSizeOfSc() {
      setWindowSize(window.innerWidth)
    }
      //! setWindowSize عند تفيير قياس الصفحة تخزن الرقم داخل داخل 
    window.addEventListener('resize', setWindowSizeOfSc);

    return () => {
      window.removeEventListener('resize', setWindowSizeOfSc);
    }
  }, []);

  return (
    <WindowSize.Provider value={{windowSize, setWindowSize}}>
      {children}
    </WindowSize.Provider>
  );
};

export default Window;
