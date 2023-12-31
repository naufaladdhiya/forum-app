import React from "react";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setAuthUser } from "../../states/authedUser/action";

const LoginInput = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const dispatch = useDispatch();

  const onLogin = (event) => {
    event.preventDefault();
    dispatch(setAuthUser({ email, password }));
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <form
        className="flex flex-col gap-4 mt-8 w-full md:w-1/2"
        onSubmit={onLogin}
      >
        <input
          type="email"
          id={email}
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="px-2 py-3 border-2 border-gray-600 bg-blue-100 bg-opacity-50 rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          className="px-2 py-3 border-2 border-gray-600 bg-blue-100 bg-opacity-50 rounded-md"
        />
        <button
          type="submit"
          className="p-2 border-2 border-gray-600 rounded-xl bg-slate-400 text-white font-bold"
        >
          Login
        </button>
        <p className="text-center">
          Belum punya akun? Silahkan{" "}
          <Link to="register" className="underline text-blue-400">
            register
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginInput;
