import { useState } from "react";
import { formDataInterface } from "../interfaces/formDataInterface";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userDataSlice";
import { loginToken } from "../redux/slices/tokenSlice";
import useHandleSession from "./useHandleSession";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {handleSession} = useHandleSession();

  const loginUser = async (url: string, userData: formDataInterface) => {
    setLoading(true); // Start loading

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Login Successful");
        handleSession(); // todo this creates a timestamp for the session, may need to be changed
        localStorage.setItem("token", result.token);
        localStorage.setItem("userData", JSON.stringify(result.user)); // Use JSON.stringify for objects
        dispatch(login(result.user));
        dispatch(loginToken(result.token));
        navigate("/");
        setError(null); // Clear any existing errors
      } else {
        setError(result.message);
        console.log(result.message);
      }
    } catch (error) {
      setError("An unexpected error occurred"); // Handle general errors
      console.error(error); // Log the actual error for debugging
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return { loginUser, loading, error }; // Return necessary values
};
