import { createContext } from "react";

export interface UI {
  mobileMenuOpen: boolean;
  setMobileMenuOpen(value: boolean): void;
}

export default createContext<UI>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});
