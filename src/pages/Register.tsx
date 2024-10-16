import { ChangeEvent, useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { userDataInterface } from "../interfaces/userDataInterface";
import { InputBox } from "../components/InputBox";

export const Register: React.FC = () => {
  const { registerUser, loading, error } = useRegister(); //how import hook
  const [userData, setUserData] = useState<userDataInterface>({
    email: "",
    password: "",
  });

  const updateUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser(userData, "http://localhost:4005/auth/register");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <InputBox
              placeholder="Email Address"
              onChange={updateUserData}
              name="email"
              value={userData.email}
              type="email"
            />

            {/* Password Field */}

            <InputBox
              placeholder="Enter your password"
              onChange={updateUserData}
              name="password"
              value={userData.password}
              type="password"
            />

            {/* Submit Button */}

              <button
                type="submit"
                className="bg-blue-500 mx-auto min-w-32 w-1/3 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
              <p className="text-red-600 block">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
};
