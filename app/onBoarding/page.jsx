'use client';
import { Box, Typography } from "@mui/material";
import styles from "./onboarding.module.css";
import MainSteppers from "@/src/components/onBoarding/components/steppers/mainStepper";
import { useSession } from "next-auth/react";

const steps = ['INFORMACIÓN BÁSICA', 'INFORMACIÓN DE CONTACTO', 'INFORMACIÓN REPRESENTANTES LEGALES: PRINCIPALES Y SUPLENTES','INFORMACIÓN FINANCIERA','DECLARACIÓN ORIGEN DE BIENES Y FONDOS','DECLARACIONES','INFORMACIÓN DE LOS CONTROLANTES Y SOCIOS (O ACCIONISTAS) CON EL PORCENTAJE DE PARTICIPACIÓN IGUAL O SUPERIOR AL 5%'];

export default function Home() {

  const { status } = useSession();

   if (status === "loading") {
     return <div></div>;
   }

   if (status === "authenticated") {
     return router.push("/user");
   }

  return (
    <Box component="div" className={styles.main}>
      <Typography variant="h2" marginTop={5} fontWeight={600} component="h1" sx={{color:"#002663"}}>
        Formulario Onboarding
      </Typography>
      <Typography variant="h5" fontWeight={600} component="p" sx={{color:"#002663"}}>
        Al diligenciar este formulario usted está solicitando utilizar los servicios de Benky
      </Typography>

      <MainSteppers />
    </Box>
  );
}
