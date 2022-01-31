import { ReactNode, useState, useEffect } from "react";

import SessionContext, { Session } from "./session";
import UIContext from "./ui";
import FullScreenLoading from "~/components/FullScreenLoading";

interface Props {
  children: ReactNode;
}

export default function GlobalContextProvider({ children }: Props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<Session["currentUser"]>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    <SessionContext.Provider value={{ loggedIn, currentUser }}>
      <UIContext.Provider
        value={{
          mobileMenuOpen,
          setMobileMenuOpen: (value) => setMobileMenuOpen(value),
        }}
      >
        {children}
      </UIContext.Provider>
    </SessionContext.Provider>
  );
}
