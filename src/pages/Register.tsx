import { ChangeEvent, useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { formDataInterface } from "../interfaces/formDataInterface";
import { InputBox } from "../components/InputBox";
import useScrollHooks from "../hooks/useScrollHooks";

export const Register: React.FC = () => {
  useScrollHooks();
  const { registerUser, loading, error } = useRegister(); //how import hook
  const [formData, setUserData] = useState<formDataInterface>({
    email: "",
    password: "",
  });

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser(formData, "http://localhost:4005/auth/register");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border-[1px] p-5 max-w-[30rem] min-w-fit w-[80%] flex flex-col shadow-2xl rounded-md">
          <h2 className="font-bold text-center mb-10">Register</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <InputBox
              placeholder="Email Address"
              onChange={changeInput}
              name="email"
              value={formData.email}
              type="email"
            />
            <InputBox
              placeholder="Enter your password"
              onChange={changeInput}
              name="password"
              value={formData.password}
              type="password"
            />
            <button
              className={`bg-blue-500 text-white w-1/3 min-w-32 mx-auto font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? "opacity-50 disabled:" : ""
              }`}
              type="submit"
            >{`${loading ? "Loading..." : "Register"}`}</button>
            <p className="text-red-600 block text-center">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
};
