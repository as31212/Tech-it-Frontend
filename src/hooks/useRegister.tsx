import { useState } from "react";
import { formDataInterface } from "../interfaces/formDataInterface";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginToken } from "../redux/slices/tokenSlice";
import { login } from "../redux/slices/userDataSlice";

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (userData: formDataInterface, url: string) => {
    setLoading(true);
    setError(null); // Reset any previous errors
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
        console.log("User account created successfully");
        localStorage.setItem("token", result.token);
        localStorage.setItem("userData", JSON.stringify(result.user));
        dispatch(login(result.user));
        dispatch(loginToken(result.token));
        navigate("/");
      } else {
        setError(result.message || "Failed to create the account");
        console.error("User account could not be created:", result.message);
      }
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};
