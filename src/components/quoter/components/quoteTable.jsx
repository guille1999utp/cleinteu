import React from "react";

export const QuoteTable = () => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full border-2 rounded-2xl text-left border-collapse overflow-hidden">
                <thead className="text-xl text-white bg-blue_custom rounded-t-2xl">
                    <tr>
                        <th
                            scope="col"
                            className="flex px-6 py-3 items-center gap-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <rect
                                    width="40"
                                    height="40"
                                    rx="20"
                                    fill="white"
                                />
                                <g clip-path="url(#clip0_13_58)">
                                    <path
                                        d="M15.5 12C13.57 12 12 13.57 12 15.5C12 17.43 13.57 19 15.5 19C17.43 19 19 17.43 19 15.5C19 13.57 17.43 12 15.5 12ZM15.5 17C14.67 17 14 16.33 14 15.5C14 14.67 14.67 14 15.5 14C16.33 14 17 14.67 17 15.5C17 16.33 16.33 17 15.5 17ZM24.5 21C22.57 21 21 22.57 21 24.5C21 26.43 22.57 28 24.5 28C26.43 28 28 26.43 28 24.5C28 22.57 26.43 21 24.5 21ZM24.5 26C23.67 26 23 25.33 23 24.5C23 23.67 23.67 23 24.5 23C25.33 23 26 23.67 26 24.5C26 25.33 25.33 26 24.5 26ZM13.41 28L12 26.59L26.59 12L28 13.41L13.41 28Z"
                                        fill="#072760"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13_58">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(8 8)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Tasa
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 border-l-2 border-white text-right"
                        >
                            <div className="flex items-center justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                >
                                    <rect
                                        width="40"
                                        height="40"
                                        rx="20"
                                        fill="white"
                                    />
                                    <path
                                        d="M20.89 19.1C19.11 18.51 18.25 18.14 18.25 17.2C18.25 16.18 19.36 15.81 20.06 15.81C21.37 15.81 21.85 16.8 21.96 17.15L23.54 16.48C23.39 16.03 22.72 14.56 21 14.24V13H19V14.26C16.52 14.82 16.51 17.12 16.51 17.22C16.51 19.49 18.76 20.13 19.86 20.53C21.44 21.09 22.14 21.6 22.14 22.56C22.14 23.69 21.09 24.17 20.16 24.17C18.34 24.17 17.82 22.3 17.76 22.08L16.1 22.75C16.73 24.94 18.38 25.53 19 25.71V27H21V25.76C21.4 25.67 23.9 25.17 23.9 22.54C23.9 21.15 23.29 19.93 20.89 19.1ZM11 29H9V23H15V25H12.52C14.13 27.41 16.88 29 20 29C24.97 29 29 24.97 29 20H31C31 26.08 26.08 31 20 31C16.28 31 12.99 29.15 11 26.33V29ZM9 20C9 13.92 13.92 9 20 9C23.72 9 27.01 10.85 29 13.67V11H31V17H25V15H27.48C25.87 12.59 23.12 11 20 11C15.03 11 11 15.03 11 20H9Z"
                                        fill="#072760"
                                    />
                                </svg>
                                <span style={{ marginLeft: "8px" }}>Valor</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        className="border-b border-gray-900"
                        style={{ backgroundColor: "#F3F3F3" }}
                    >
                        <th
                            scope="row"
                            className="px-6 py-4 font-bold text-blue_custom whitespace-nowrap text-lg"
                        >
                            Actual
                        </th>
                        <td className="px-6 py-4 border-l-2 text-right font-medium">
                            :3,880.05 :
                        </td>
                    </tr>
                    <tr
                        className="border-b border-gray-900"
                        style={{ backgroundColor: "#F3F3F3" }}
                    >
                        <th
                            scope="row"
                            className="px-6 py-4 font-bold text-blue_custom whitespace-nowrap text-lg"
                        >
                            Kambia
                        </th>
                        <td className="px-6 py-4 border-l-2 text-right font-medium">
                            :3,843.05 :
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
