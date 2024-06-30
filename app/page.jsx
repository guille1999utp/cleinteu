import styles from "./page.module.css";

//import Nabvar from "@/src/components/landingPage/components/navbar";
import { Navbar } from "@/src/components/landingPageFinalVersion/components/navbar";
import { Banner } from "@/src/components/landingPageFinalVersion/components/banner";

import { Footer } from "@/src/components/landingPage/components/footer";
// import { HowItWorks } from "@/src/components/landingPage/components/howItWorks";
// import { AboutUs } from "@/src/components/landingPage/components/aboutUs";
// import { Coverage } from "@/src/components/landingPage/components/coverage";
// import Banner from "@/src/components/landingPage/components/Banner";
// import FormRegister from "@/src/components/landingPage/components/FormRegister";
// import Service from "@/src/components/landingPage/components/Services";

export default function Home() {
  return (
    <main className={styles.main}>

      <Navbar />
      <Banner/>
      {/*<Banner />
      <AboutUs/>
      <HowItWorks/>
      <Coverage/>
      <Service /> */}
      {/* <FormRegister /> */}
     {/*  <Footer /> */}
    </main>
  );
}
