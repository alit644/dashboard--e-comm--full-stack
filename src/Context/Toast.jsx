import MyToast from "../Components/website/Toast/MyToast";
import { createContext, useState } from "react";

export const ToastContext = createContext({});

// eslint-disable-next-line react/prop-types
const ToastProvider = ({children}) => {
  const [open, setOpen] = useState(false);
  const [massge, setMassge] = useState("");

  const showHideAlert = (mss) => {
    setOpen(true);
    setMassge(mss);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <ToastContext.Provider  value={{ showHideAlert }}>
        <MyToast open={open} massge={massge} />
      {children}
      </ToastContext.Provider>
    )
}

export default ToastProvider;
