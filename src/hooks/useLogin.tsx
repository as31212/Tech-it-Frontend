import { useState } from "react";
import { userDataInterface } from "../interfaces/userDataInterface";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginUser = async (url: string, userData: userDataInterface) => {
    setLoading(true);  // Start loading

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
        localStorage.setItem("token", result.token);
        localStorage.setItem("userData", JSON.stringify(result.user)); // Use JSON.stringify for objects
        navigate('/');
        setError(null); // Clear any existing errors

      } else {
        setError(result.message);
        console.log(result.message);
      }
    } catch (error) {
      setError("An unexpected error occurred");  // Handle general errors
      console.error(error);  // Log the actual error for debugging
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return { loginUser, loading, error };  // Return necessary values
};
