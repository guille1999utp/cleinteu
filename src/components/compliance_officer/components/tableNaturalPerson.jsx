import React from "react";
import { successAlert } from "../../onBoarding/components/alerts/success";
import { errorsAlert } from "../../onBoarding/components/alerts/errors";
import { useSession } from "next-auth/react";


export const TableNaturalPerson = ({ title, list=[] }) => {

    const { data: session, status } = useSession();


    const onChange = async (e, identification_number) => {
        try {
            const resPut = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/compliance_officer/${identification_number}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + session?.user?.token,
                },
                body: JSON.stringify({
                    validate: e.target.checked ? 1 : 0
                })
            })

            if (resPut.ok) {
                successAlert("Actualizado con Exito")
            } else {
                errorsAlert("Error al Actualizar")
            }
        } catch (e) {
            errorsAlert("Error al Actualizar")

        }
    }
    return (
        <>
            <h4 className=" text-2xl font-bold text-center mb-5 text-primary">{title}</h4>
            <div className="relative overflow-x-auto max-h-72 w-96 md:w-4/5">
                <table className="w-full text-sm">
                    <thead className="text-xs text-primary uppercase ">
                        <tr className="border-b-2">
                            <th scope="col" className="px-6 py-3">
                                Nombre Completo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Identificacion No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Copia de documento de identidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Declaración de renta
                            </th>
                            <th scope="col" className="px-6 py-3">
                                RUT
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificado Bancario vigente.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Validar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((item, index) => (
                                <tr key={index} className="bg-white border-b text-center">
                                    <th scope="row" className="px-6 py-4">
                                        {item.name} {item.lastname}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.identification_number}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={item.document_identity} target="_blank" className="text-blue-500">Ver</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={item.financial_statements} target="_blank" className="text-blue-500">Ver</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={item.rut} target="_blank" className="text-blue-500">Ver</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={item.bank_certificate} target="_blank" className="text-blue-500">Ver</a>
                                    </td>
                                    <td class="inline-flex items-center">
                                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-900 checked:bg-blue-900 checked:before:bg-blue-900 hover:before:opacity-10"
                                                onChange={(e) => onChange(e, item.identification_number)} defaultChecked={item.validate == 1 ? true : false} />
                                            <span
                                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                    stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>


    );
};
