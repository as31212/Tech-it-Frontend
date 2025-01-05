import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { userDataInterface } from "../interfaces/userDataInterface";
import useScrollHooks from "../hooks/useScrollHooks";

const Profile: React.FC = () => {
  useScrollHooks();
  const token = localStorage.getItem("token") || null;
  const userData: userDataInterface = useSelector(
    (state: reduxStoreInterface) => state.userData
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Profile
        </h2>
        {token && userData ? (
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-700">
              Welcome, <span className="font-bold">{userData.email.split("@")[0]}</span>!
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              <span className="font-normal">{userData.email}</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">TOKEN:</span>{" "}
              <span className="font-normal">
                {token.split("").slice(0, 10).join("")}...
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Role:</span>{" "}
              <span className="font-normal capitalize">{userData.role}</span>
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-600">No user logged in</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
