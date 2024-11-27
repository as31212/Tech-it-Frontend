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
    localStorage.removeItem("timestamp"); // works in tandem with the useHandleSession hook
    dispatch(logout());
    dispatch(logoutToken());
    console.log("Logged out user");
    navigate("/Login"); // todo this may need to be removed and replaced with a modal that notifies the user that they have been logged out and offers them to log back in or continue becuase in its current state navigate cannot be used outside the context of the router hook meaning you cannot add the hook to the application
  };
  return {logoutFunc}
};
