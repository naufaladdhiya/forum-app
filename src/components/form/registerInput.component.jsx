import React from "react";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../../states/users/action";

const RegisterInput = () => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [passwordConfirmation, onPasswordConfirmationChange] = useInput("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onRegister = (event) => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password, passwordConfirmation }));
    navigate("/");
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold">Register</h1>
      <form
        className="flex flex-col gap-4 mt-8 w-full md:w-1/2"
        onSubmit={onRegister}
      >
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Nama"
          className="px-2 py-3 border-2 border-gray-600 bg-blue-100 bg-opacity-50 rounded-md"
        />
        <input
          type="email"
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
        <input
          type="password"
          value={passwordConfirmation}
          onChange={onPasswordConfirmationChange}
          placeholder="Confirm Password"
          className="px-2 py-3 border-2 border-gray-600 bg-blue-100 bg-opacity-50 rounded-md"
        />
        <button
          type="submit"
          className="p-2 border-2 border-gray-600 rounded-xl bg-slate-400 text-white font-bold"
        >
          Register
        </button>
        <p className="text-center">
          Sudah punya akun? Silahkan{" "}
          <Link to="/" className="underline text-blue-400">
            login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterInput;
