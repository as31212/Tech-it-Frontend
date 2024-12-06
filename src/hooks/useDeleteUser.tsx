import { useState } from "react";
import { useLogout } from "./useLogout";

const useDeleteUser = () => {
  const { logoutFunc } = useLogout();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const deleteUser = async (id: string, token: string) => {
    setLoading(true);
    try {
      const request = await fetch(`http://localhost:4005/auth/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "json/application",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await request.json();

      if (request.ok) {
        console.log(result.message);
        logoutFunc();
      }
      else{
        setError(result.message);
        console.log(result.message);
        
      }
    } catch (error) {
      setError("An unexpected error occurred"); 
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {loading,error,deleteUser};
};

export default useDeleteUser;
