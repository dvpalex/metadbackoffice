import React from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "../../hooks/login";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onSubmit = async (data: ILogin) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-80">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Usuário:
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true, minLength: 6 })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors["username"] ? "border-red-400" : "focus:border-blue-400"
              }`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true, minLength: 8 })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors["password"] ? "border-red-400" : "focus:border-blue-400"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
