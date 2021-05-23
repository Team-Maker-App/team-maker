import React from "react";
import Layout from "../../components/Layout";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signIn, createUser } from "../../helpers/firebase";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [_, setUID] = useLocalStorage("uid");
  const history = useHistory();

  const navigate = () => {
    history.push({ pathname: "/create" });
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password).then((data) => {
      navigate()
      setUID(data.uid)});
  };

  const onCreate = (data) => {
    const { email, password } = data;
    createUser(email, password).then((data) => {
      navigate()
      setUID(data.uid)});
  };

  return (
    <Layout>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-6 sm:mx-0 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ingresar
              </button>
              <div>
              </div>
              <p onClick={handleSubmit(onCreate)} className="flex justify-center underline text-primary cursor-pointer py-2 px-4">Crear usuario</p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
