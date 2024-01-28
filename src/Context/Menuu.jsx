import { createContext, useState } from "react";

export const Menu = createContext(true);
// eslint-disable-next-line react/prop-types
const MenuProvidar = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  // @ts-ignore
  return <Menu.Provider value={{ isOpen, setIsOpen }}>{children}</Menu.Provider>
};

export default MenuProvidar;
