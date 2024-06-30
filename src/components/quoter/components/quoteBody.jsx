import vectorCheck from "@/src/assets/newLogos/vectorCheck.png";
import Image from "next/image";

export const QuoteBody = () => {
    return (
        <div>
            <h4 className="text-lg text-blue_custom font-bold mt-10">
                Disponible
            </h4>
            <div className="flex flex-col md:flex-row justify-between text-xs mt-2">
                <p>
                    Las transacciones efectuadas después de las 9:55am se verán
                    reflejadas en el siguiente día hábil
                </p>
                <p className="text-base text-blue_custom font-bold">
                    USD: 0.00
                </p>
            </div>
            <div
                className="flex flex-col md:flex-row items-center justify-between mt-6 p-7 border rounded-2xl"
                style={{ backgroundColor: "#F3F3F3" }}
            >
                <h4 className="col-span-6 font-bold">
                    Monto a cerrar $USD 0.00
                </h4>
                <div className="flex col-span-6 items-center rounded-3xl border border-black">
                    <input
                        type="number"
                        placeholder="0"
                        className="flex-grow h-8 bg-white text-black rounded-3xl px-2"
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 justify-between mt-8 gap-2">
                <p className="col-span-12 md:col-span-4">Total COP $0.00</p>
                <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row justify-center md:justify-end gap-3">
                    <button class="group relative text-sm inline-flex h-10 w-full md:w-2/5 items-center justify-center overflow-hidden rounded-3xl bg-white px-6 font-semibold text-blue_custom border border-blue_custom p-2">
                        <span>Transferir todo</span>
                        <div class="ml-1 transition duration-300 group-hover:rotate-[360deg]">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                            >
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </button>

                    <button class="group relative text-sm inline-flex h-10 w-full md:w-2/5 items-center justify-center overflow-hidden rounded-3xl bg-blue_custom px-6 font-semibold text-white border border-blue_custom p-2 gap-2">
                        <span>Autorizar cierre</span>
                        <Image src={vectorCheck} alt="check vector" width={20}/>
                    </button>
                </div>
            </div>
            <div className="w-full text-end mt-5">
                <p className="font-semibold">Restante USD $0.00</p>
            </div>
        </div>
    );
};
