import styles from "../page.module.css";

//import Nabvar from "@/src/components/landingPage/components/navbar";
import { Navbar } from "@/src/components/landingPageFinalVersion/components/navbar";
import primero from "@/src/assets/logos/Megabus.jpg";
import segundo from "@/src/assets/logos/Ministeriotic.jpg";
import Image from "next/image";


export default function HowItWorks() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            backgroundColor: "rgb(245,159,118)",
            width: "50%",
            padding: "170px 80px",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "auto" }}>
            <Image
              src={primero}
              style={{ width: "100%", marginBottom: "29px" }}
            />
            <p>Megacable Pereira</p>
            <p>
              Diseño, construcción e instalación de toda la señaletica del
              sistema de cable aereo más largo de Colombia.
            </p>
            <p>
              + 900 mil usuarios movilizados en sus primeros 6 meses de
              funcionamiento.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "170px 80px",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "auto" }}>
            <Image
              src={segundo}
              style={{ width: "100%", marginBottom: "29px" }}
            />
            <p>
              Ministerio de Tecnologías de la Información y las Comunicaciones
              de Colombia: MinTIC.
            </p>
            <p>
              Campaña: Misión TIC 2022 operador UTP.
              <br /> 4 Mil estudiantes beneficiados
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
