import { Link } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { ChangeEvent, useState } from "react";
import { formDataInterface } from "../interfaces/formDataInterface";
import { useLogin } from "../hooks/useLogin";
import useScrollHooks from "../hooks/useScrollHooks";

export const Login: React.FC = () => {
  useScrollHooks();
  const [formData, setUserData] = useState<formDataInterface>({
    email: "",
    password: "",
  });
  const { loginUser, loading, error } = useLogin();

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser("http://localhost:4005/auth/login", formData);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div
          className="border-[1px] p-5 max-w-[30rem] min-w-fit w-[80%] flex flex-col shadow-2xl rounded-md"
          id="login-box"
        >
          <h2 className="font-bold text-center mb-10">Login</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <InputBox
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={changeInput}
              value={formData.email}
            />
            <InputBox
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeInput}
              value={formData.password}
            />
            <button
              className={`bg-blue-500 text-white w-1/3 min-w-32 mx-auto font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? "opacity-50 disabled:" : ""
              }`}
              type="submit"
            >{`${loading ? "Loading..." : "Log in"}`}</button>
            <p className="text-red-400 text-center">{error ? error : ""}</p>
            <p className="text-center">
              don't have an account? Sign Up{" "}
              <Link
                className="text-blue-400 underline hover:text-blue-800"
                to="/Register"
              >
                Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
