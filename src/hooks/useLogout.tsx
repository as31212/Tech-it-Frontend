export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    console.log("Logged out user");
  };
  return {logout}
};
