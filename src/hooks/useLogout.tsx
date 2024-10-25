import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/userDataSlice";
import { logoutToken } from "../redux/slices/tokenSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logoutFunc = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(logoutToken());
    console.log("Logged out user");
  };
  return {logoutFunc}
};
