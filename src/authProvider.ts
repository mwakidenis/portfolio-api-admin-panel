import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  // Runs when user attempts to login
  login: ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      return Promise.resolve();
    }
    return Promise.reject();
  },
  // Runs when logout
  logout: () => {
    // Removes username from localStorage
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // Runs when API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // Runs when the user navigates to a new location to check for auth
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // Runs when the user navigates to a new location to check for permissions or rules
  getPermissions: () => Promise.resolve(),
};
