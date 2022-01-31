import { createContext } from "react";

export interface Session {
  loggedIn: boolean;
  currentUser: CurrentUser | null;
}
export interface CurrentUser {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
}

export default createContext<Session>({
  loggedIn: false,
  currentUser: null,
});
