import { useSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";
import { userDataInterface } from "../interfaces/userDataInterface";
import useScrollHooks from "../hooks/useScrollHooks";

const Profile: React.FC = () =>{
  useScrollHooks();
    const token = localStorage.getItem("token") || null;
  const userData:userDataInterface = useSelector((state:reduxStoreInterface) => state.userData);

    return(
        <>
         {/* test code for login, delete once home page is complete */}
      <div className="h-screen">
          <h2 className="font-bold text-center mt-10">Home</h2>
          {token && userData ? (
            <div>
              <p className="font-bold">
                Welcome
              </p>
              <p className="font-bold">
                Email: <span className="font-normal">{userData.email}</span>
              </p>
              <p className="font-bold">
                TOKEN:
                <span className="font-normal">
                  {" "}
                  {token.split("").slice(0, 10)}...
                </span>
              </p>
              <p className="font-bold">
                Role: <span className="font-normal">{userData.role}</span>
              </p>
            </div>
          ) : (
            <p>No user logged in</p>
          )}
      </div>
        </>
    );
}

export default Profile;