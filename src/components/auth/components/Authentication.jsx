import { useForm } from "react-hook-form";
import { successAlert } from "../../onBoarding/components/alerts/success";
import { errorsAlert } from "../../onBoarding/components/alerts/errors";
import { useRouter } from "next/navigation";

export const Authentication = ({ id }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/autenticate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok == true) {
                    successAlert("Contraseña asignada correctamente");

                    router.push("/login");

                    // reset();
                } else {
                    errorsAlert(data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
      <div className="flex flex-col h-screen p-5 md:p-36 text-center items-center justify-center">
        <h4 className="text-3xl font-bold">Asigna tu Contraseña</h4>
        <form
          className="flex flex-col w-full text-center items-center justify-center"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-2/3 md:w-1/2 mt-4">
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
              type="submit"
              className="relative overflow-hidden rounded-md bg-blue_custom px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
};
