"use client";
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import benkyLogo from "../../../../assets/logos/Benky_logo_white 1.png";
import benkyLogo2 from "../../../../assets/newLogos/logobenky.png";
import iconFacebook from "../../../../assets/logos/tabler_brand-facebook.png";
import iconInstagram from "../../../../assets/logos/tabler_brand-instagram.png";
import iconUser from "../../../../assets/logos/tabler_user-circle.png";
import menu from "../../../../assets/icons/menu.svg";
import close from "../../../../assets/icons/close.svg";
import { useMediaQuery } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <nav
      className={`${styles.TopNav}  min-[800px]:block ${
        isOpen && !matches ? "fixed h-full" : ""
      } bg-blue_custom z-50`}
    >
      <div className="hidden h-full md:h-auto min-[800px]:grid grid-cols-12 items-center py-5 gap-4 px-6">
        <div className="col-span-12 md:col-span-3 m-auto  md:w-full flex justify-start items-center text-center overflow-hidden  whitespace-nowrap   text-ellipsis">
          <Link
            href="/"
            className="flex justify-center items-center text-center"
          >
            <Image
              src={benkyLogo2}
              className="min-h-10 min-w-10"
              alt="benky logo"
              width={60}
              height={60}
              style={{ minWidth: "60px !important" }}
            />
          </Link>
          <Link
            href="/user"
            className="flex justify-center items-center text-center "
          >
            <p className="text-white h-full ml-5">{session?.user?.email}</p>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center gap-4 items-center text-center h-full md:h-auto">
          <Link href="/user" className="text-white text-sm">
            Perfil
          </Link>
          <Link href="/quoter" className="text-white text-sm text-nowrap">
            Cotizador
          </Link>
          <Link
            href="/compliance_officer"
            className="text-white text-sm text-nowrap"
          >
            Oficial de Cumplimiento
          </Link>
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-end">
          <button
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-3xl px-10 bg-white text-base"
            onClick={() => signOut()}
          >
            <span className="pr-2">Salir</span>
            <ExitToAppIcon />
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:skew-x-[-12deg] group-hover:translate-x-[100%]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="h-full min-[800px]:hidden grid grid-cols-12 justify-between items-center py-5 gap-4 z-50">
          <div className="col-span-12 min-[800px]:col-span-3 min-[800px]:pl-5 m-auto w-1/2 min-[800px]:w-full">
            <Link
              href="/"
              className="flex justify-center items-center text-center mt-5"
            >
              <Image src={benkyLogo} alt="benky logo" />
            </Link>
            <Link
              href="/user"
              className="flex justify-center items-center text-center mt-5"
            >
              <p className="text-white h-full ml-5 font-semibold">{session?.user?.email}</p>
            </Link>
          </div>
          <div className="col-span-12 grid grid-cols-12 items-center text-center h-full min-[800px]:h-auto">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/user"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm"
            >
              Perfil
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/compliance_officer"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm text-nowrap"
            >
              Oficial de Cumplimiento
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/quoter"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm text-nowrap"
            >
              Cotizador
            </Link>
          </div>
          <div className="col-span-12 min-[800px]:col-span-2 flex justify-center">
            <Link
              className="mr-2"
              href="https://www.facebook.com/Benky-Env%C3%ADos-de-dinero-100305172113627"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={iconFacebook}
                alt="icon facebook"
                width={25}
                height={25}
              />
            </Link>
            <Link
              className="mr-2"
              href="https://www.instagram.com/benky__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={iconUser}
                alt="icon instagram"
                width={25}
                height={25}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/somosbenky/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={iconInstagram}
                alt="icon linkedin"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-[800px]:hidden justify-between items-center py-5 gap-4">
          <Link href="/" className="pl-6 md:w-full flex">
            <Image src={benkyLogo} alt="benky logo" width={100} height={60} />
          </Link>
        </div>
      )}
      <div className="min-[800px]:hidden flex justify-end absolute top-0 right-0 p-2 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? (
            <Image src={close} alt="close menu" height={35} width={35} />
          ) : (
            <Image src={menu} alt="open menu" height={35} width={35} />
          )}
        </button>
      </div>
    </nav>
  );
}
