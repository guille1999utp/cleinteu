import Nabvar from "@/src/components/onBoarding/components/navbar.jsx";
import { FormContextProvider } from "@/src/context/FormContext";
import { Box } from "@mui/material";
import styles from "./onboarding.module.css";

export const metadata = {
  title: "Benky - Onboarding",
  description: "Onboarding",
  icons: {
    icon:[
        '/logo-isotipo-benky.png'
    ],
    apple:[
        '/logo-isotipo-benky.png'
    ],
    shortcut:[
        '/logo-isotipo-benky.png'
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <Box component="body">
        <Box component="main" className={styles.home_main}>
            <Box component="div" className={styles.home_content}>
                <Nabvar />
                <FormContextProvider>
                    {children}
                </FormContextProvider>
            </Box>
        </Box>
      </Box>
    </html>
  );
}
