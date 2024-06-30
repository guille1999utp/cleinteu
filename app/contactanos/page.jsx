import styles from "../page.module.css";

//import Nabvar from "@/src/components/landingPage/components/navbar";
import { Navbar } from "@/src/components/landingPageFinalVersion/components/navbar";
import primero from "@/src/assets/logos/hombre.jpg";
import segundo from "@/src/assets/logos/hombre.jpg";
import Image from "next/image";


export default function Contactanos() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section style={{ display: "flex", flexDirection: "column",background:"black",marginTop:"122px",minHeight:"100vh",padding:"80px 100px" }}>
        <h3 style={{color:"white",fontSize:"50px"}}>Acerca de House Media</h3> <br /> <br />
               <p style={{color:"white"}}>Somos una agencia de publicidad y de medios con 14 años de experiencia, nuestra sede principal se ubica en la ciudad de Pereira y contamos con oficinas satélites en New York y Bogota, nos dedicamos a idear y a crear campañas publicitarias innovadoras y efectivas.</p>
        <br /> <p style={{color:"white"}}>En House Media nuestros colaboradores son esenciales, sus intereses y expectativas son nuestra razón de ser y por las cuales trabajamos día a día, convencidos de que la innovación y nuestra ya reconocida disposición en todo momento es el camino más adecuado para el éxito de nuestros clientes.</p>
        <br /> <p style={{color:"white"}}>Para nosotros la creatividad publicitaria no consiste solamente en lanzar un mensaje para que las campañas tengan éxito, debemos poder seducir, motivar y llegar al corazón de nuestros clientes. Para esto rescatamos los valores y las creencias que tiene cada anunciante, y gestionamos su campaña mediante nuestra atención personalizada.</p>
        <br /> <p style={{color:"white"}}>HOUSE MEDIA BE CREATIVE</p>
        <br /> <p style={{color:"white"}}>+57 312 420 2020 </p>
        <br /> <p style={{color:"white"}}>marketing@housemedia.co</p>
        <br /> <p style={{color:"white"}}>Cra 15 # 12 -37 barrio los Alpes</p>
        <br /> <p style={{color:"white"}}>Torre Núcleo Ofic 402B
        </p>
      
      
      </section>
    </main>
  );
}
