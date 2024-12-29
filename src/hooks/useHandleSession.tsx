import { useEffect } from "react";
import { useLogout } from "./useLogout";
import { setSessionStatus } from "../redux/slices/sessionSlice";
import { useDispatch,useSelector } from "react-redux";

const useHandleSession = () => {
  const { logoutFunc } = useLogout();
  const dispatch = useDispatch();

  const handleSession = () => {
    const currentTimestamp = new Date().getTime();
    const storedTimestamp = localStorage.getItem("timestamp");

    if (storedTimestamp) {
      const timeDifference = currentTimestamp - parseInt(storedTimestamp, 10);
      if (timeDifference > 1000 /*3600000*/) {
        // 1 hour in milliseconds
        dispatch(setSessionStatus("inactive"));
        logoutFunc();
      }
      else if(timeDifference > 3000000){
        dispatch(setSessionStatus("session warning"));
      }
      
    } else {
      localStorage.setItem("timestamp", JSON.stringify(currentTimestamp));
      dispatch(setSessionStatus("active"));
    }
  };

  useEffect(() => {
    handleSession();
  }, []);

  return { handleSession };
};

export default useHandleSession;

// todo you need to include the following 1.session is about to expire 2. session expired 3. create the state within redux in order to be able to display these changes within separate components
