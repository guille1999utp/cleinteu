"use client"
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image';

import mail from "@/src/assets/logos/mail.png";
import iconFacebook from '../../../assets/logos/tabler_brand-facebook.png';
import iconInstagram from '../../../assets/logos/tabler_brand-instagram.png';
import iconUser from '../../../assets/logos/tabler_user-circle.png';
import menu from '../../../assets/icons/menu.svg';
import close from '../../../assets/icons/close.svg';
import { useMediaQuery } from "@mui/material";
import LogoCliente from "@/src/assets/logos/logocliente.png";

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const matches = useMediaQuery("(min-width:800px)");

  return (
    <nav
      className={`${styles.TopNav}  min-[800px]:absolute ${
        isOpen && !matches ? "fixed h-full" : ""
      } bg-blue_custom z-50`}
    >
      <div className="hidden h-full md:h-auto min-[800px]:grid grid-cols-12 items-center py-5 gap-4 px-6">
        <Link
          href="/"
          className="col-span-12 md:col-span-2  m-auto w-1/5 md:w-full flex  justify-center"
        >
          <Image src={LogoCliente} alt="benky logo" width={100} />
        </Link>
        <div className="col-span-12 md:col-span-8 flex justify-center gap-4 items-center text-center h-full md:h-auto">
          <Link href="/#home" className="text-white text-sm">
            Inicio
          </Link>
          <Link href="/#aboutUs" className="text-white text-sm text-nowrap">
            Quienes somos
          </Link>
          <Link href="/howItWorks" className="text-white text-sm text-nowrap">
            Nuestros clientes
          </Link>
          <Link href="/contactanos" className="text-white text-sm">
            Hablemos
          </Link>
        </div>
        <div className="col-span-12 md:col-span-2 flex justify-center">
          <Link
            href="https://wa.me/573124202020"
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-3xl px-10 font-light bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom text-white text-base"
          >
            <span className="pr-2">Contact</span>
            <Image src={mail} alt="mail icon" width={20} height={20} />
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:skew-x-[-12deg] group-hover:translate-x-[100%]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </Link>
        </div>
      </div>
      {isOpen ? (
        <div className="h-full min-[800px]:hidden grid grid-cols-12 justify-between items-center py-5 gap-4 z-50">
          <Link
            href="/"
            className="col-span-12 min-[800px]:col-span-3 min-[800px]:pl-5 m-auto w-1/2 min-[800px]:w-full"
            style={{ display: "flex", justifyContent: "center"}}
          >
            <Image src={LogoCliente} alt="benky logo" />
          </Link>
          <div className="col-span-12 grid grid-cols-12 items-center text-center h-full min-[800px]:h-auto">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/#home"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/#services"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm text-nowrap"
            >
              About Us
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/#contact"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm text-nowrap"
            >
              How it works
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/#contact"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm"
            >
              Coverage
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href="/#contact"
              className="col-span-12 min-[800px]:col-span-2 text-white text-sm"
            >
              Services
            </Link>
          </div>
          <div className="col-span-12 min-[800px]:col-span-2 flex justify-center">
            <Link
              className="mr-2"
              target="_blank"
              rel="noopener noreferrer"
              href=""
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
              target="_blank"
              rel="noopener noreferrer"
              href=""
            >
              <Image
                src={iconUser}
                alt="icon instagram"
                width={25}
                height={25}
              />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="">
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
            <Image src={LogoCliente} alt="benky logo" width={100} height={60} />
          </Link>
        </div>
      )}
      <div className="min-[800px]:hidden flex justify-end absolute top-0 right-0 p-2 z-50 mt-8">
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
