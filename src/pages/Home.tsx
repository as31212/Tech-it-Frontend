import React from "react";
import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  const token = localStorage.getItem("token") || null;
  const userData = useSelector((state) => state.userData);

  return (
    <>
      <div className="min-h-screen"></div>

      {/* test code for login, delete once home page is complete */}
      <h2 className="font-bold text-center">Home</h2>
      {token && userData ? (
        <div>
          <p className="font-bold">
            Welcome, <span className="font-normal">{userData.name}</span>
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
    </>
  );
};
