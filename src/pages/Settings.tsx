import { useSelector } from "react-redux";
import useDeleteUser from "../hooks/useDeleteUser";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const Settings: React.FC = () => {
  const userData = useSelector((state:reduxStoreInterface)=>state.userData);
  const token = useSelector((state:reduxStoreInterface)=>state.token);
  const {error,loading,deleteUser} = useDeleteUser(); // todo handle loading state

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg mx-4">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-6 text-center">
          Delete Account
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Deleting your account is permanent and cannot be undone. All your data will be erased. 
          Please confirm if you wish to proceed.
        </p>
        <div className="flex justify-center">
          <button
          onClick={()=>{deleteUser(userData.id,token)}}
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300"
          >
            Delete Account
          </button>
          <p className="text-red-500">{error ? error : ""}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Settings;
