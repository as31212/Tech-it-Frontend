import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/userDataSlice";
import { logoutToken } from "../redux/slices/tokenSlice";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(logoutToken());
    console.log("Logged out user");
    navigate("/Login");
  };
  return {logoutFunc}
};
