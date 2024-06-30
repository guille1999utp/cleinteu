"use client"
import { Box, Typography } from "@mui/material";
import { TableNaturalPerson } from '@/src/components/compliance_officer/components/tableNaturalPerson';
import { TableLegalPerson } from '@/src/components/compliance_officer/components/tableLegalPerson';
import { useEffect, useState } from 'react';
import { Navbar } from "@/src/components/global/components/auth/nabvar";
import { useSession } from "next-auth/react";

export default function Home() {
    const [dataUser, setData] = useState(null);
    const { data: session, status } = useSession();

    useEffect(() => {
      console.log("entro");
      const fetchData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/compliance_officer`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + session?.user?.token,
            },
          }
        );
        const data = await response.json();
        setData(data);
      };
      fetchData();
    }, [session]);

    const naturalPerson = dataUser?.data?.filter((item) => item.type_person === 'Persona Natural');
    const juridicalPerson = dataUser?.data?.filter((item) => item.type_person === 'Persona Jurídica');

    return (
      <>
        {session && status == "authenticated" ? (
          <>
            <Navbar />
            <Typography
              variant="h2"
              marginTop={10}
              fontWeight={600}
              component="h1"
              className="text-center"
              sx={{ color: "#002663" }}
            >
              Oficial de Cumplimiento
            </Typography>
            <Typography
              variant="h5"
              className="text-center"
              fontWeight={600}
              component="p"
              sx={{ color: "#002663" }}
            >
              Administracion para validar los usuarios registrados
            </Typography>
            <Box
              component="div"
              className="flex flex-col items-center "
            >
              <div className="flex flex-col w-full items-center justify-center text-center mt-20">
                <TableNaturalPerson
                  title="Persona Natural"
                  list={naturalPerson}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-center text-center mt-20">
                <TableLegalPerson
                  title="Persona Juridica"
                  list={juridicalPerson}
                />
              </div>
            </Box>
          </>
        ) : (
          <>
            <Typography
              variant="h2"
              marginTop={20}
              fontWeight={600}
              component="h1"
              className="text-center"
              sx={{ color: "#002663" }}
            >
                No tienes permisos para acceder a esta página
            </Typography>
          </>
        )}
      </>
    );
}