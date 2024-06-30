"use client";
import { useForm } from "react-hook-form";
import React, { use, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { errorsAlert } from "../../onBoarding/components/alerts/errors";

export const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { status } = useSession();

  const [search, setSearch] = React.useState(false);

  const router = useRouter();

 
  const onSubmit = async (data) => {
    setSearch(true);

    try {
      const responseNextAuth = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (responseNextAuth?.error) {
        errorsAlert(responseNextAuth?.error);
        return;
      }

      router.push("/user");
    } catch (error) {
      console.log(error);
      errorsAlert("Error al iniciar sesión");
    } finally {
      setSearch(false);
    }
  };

  if(status === "loading"){
    return <div></div>
  }

  if(status === "authenticated"){
    return  router.push("/user");
  }

  return (
    <div className="flex flex-col h-screen p-36 text-center items-center justify-center">
      <h4 className="text-3xl font-bold">Inicio de Sesión</h4>
      <form
        className="flex flex-col w-full text-center items-center justify-center"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-1/2 mt-4">
          <input
            {...register("email", { required: true })}
            type="email"
            id="first_name"
            className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div className="w-1/2 mt-4">
          <input
            {...register("password", { required: true })}
            type="password"
            id="first_name"
            className="bg-gray-50 border font-bold text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-md placeholder:text-blue_custom placeholder:font-light"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="w-1/2 mt-4">
          <button
            disabled={search}
            type="submit"
            className="relative overflow-hidden rounded-md bg-blue_custom px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};
