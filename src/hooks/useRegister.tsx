import { useState } from "react";
import { userDataInterface } from "../interfaces/userDataInterface";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate =  useNavigate();

  const registerUser = async (userData: userDataInterface, url: string) => {
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
        localStorage.setItem("token",result.token);
        localStorage.setItem("userData",JSON.stringify(result.user));
        navigate('/');
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
