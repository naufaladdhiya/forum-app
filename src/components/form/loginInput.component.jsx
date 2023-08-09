import React from "react";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";

import { setAuthUser } from "../../states/authedUser/action";

const LoginInput = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(setAuthUser({ email, password }));
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="flex flex-col gap-4 mt-8 w-1/2">
        <input
          type="text"
          id={email}
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="px-2 py-3 border-2 border-gray-600"
        />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          className="px-2 py-3 border-2 border-gray-600"
        />
        <button
          type="button"
          onClick={onLogin}
          className="p-2 border-2 border-gray-600 rounded-xl bg-slate-400 text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginInput;
