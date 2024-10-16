import React from "react";

export const Home: React.FC = () => {
  const token = localStorage.getItem("token") || null;
  const userData = JSON.parse(localStorage.getItem("userData") || '{}'); // Fallback to an empty object if not found

  return (
    <>
      <h2 className="font-bold text-center">Home</h2>
      {token && userData ? (
        <div>
          <p className="font-bold">Welcome, <span className="font-normal">{userData.name}</span></p>
          <p className="font-bold">Email: <span className="font-normal">{userData.email}</span></p>
          <p className="font-bold">TOKEN:<span className="font-normal"> {token.split("").slice(0,10)}...</span></p>
          <p className="font-bold">Role: <span className="font-normal">{userData.role}</span></p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </>
  );
};
