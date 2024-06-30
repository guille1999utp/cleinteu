"use client"
import { useState } from "react";
import styles from "../styles/nav.module.css";
import Link from 'next/link'
import Image from 'next/image';
import benkyLogo from '../../../assets/logos/Benky_logo_white 1.png';
import iconFacebook from '../../../assets/logos/tabler_brand-facebook.png';
import iconInstagram from '../../../assets/logos/tabler_brand-instagram.png';
import iconUser from '../../../assets/logos/tabler_user-circle.png';
import menu from '../../../assets/icons/menu.svg';
import close from '../../../assets/icons/close.svg';

export default function Nabvar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.TopNav + ` fixed md:absolute ${isOpen ? "h-full" : ""}  md:h-auto`}>
      <div className="min-[0px]:hidden h-full md:h-auto min-[768px]:grid grid-cols-12 justify-between items-center py-5 gap-4">
        <Link href="/" className="col-span-12 md:col-span-3 md:pl-5 m-auto w-1/2 md:w-full">
          <Image src={benkyLogo} alt='benky logo' />
        </Link>
        <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-8 items-center text-center h-full md:h-auto">
          <Link href="/#about" className="col-span-12 md:col-span-2 text-white text-sm">Inicio</Link>
          <Link href="/#services" className="col-span-12 md:col-span-2 text-white text-sm text-nowrap">Quienes somos </Link>
          <Link href="/#contact" className="col-span-12 md:col-span-2 text-white text-sm text-nowrap">Nuestros clientes</Link>
          <Link href="/#contact" className="col-span-12 md:col-span-2 text-white text-sm">Hablemo</Link>
        </div>
        <div className="col-span-12 md:col-span-2 flex justify-center">
          <Link className="mr-2" href="https://www.facebook.com/Benky-Env%C3%ADos-de-dinero-100305172113627" target="_blank" rel="noopener noreferrer" >
            <Image src={iconFacebook} alt='icon facebook' width={25} height={25} />
          </Link>
          <Link className="mr-2" href='https://www.instagram.com/benky__/' target='_blank' rel='noopener noreferrer'>
            <Image src={iconUser} alt='icon instagram' width={25} height={25} />
          </Link>
          <Link href='https://www.linkedin.com/company/somosbenky/about/' target='_blank' rel='noopener noreferrer' >
            <Image src={iconInstagram} alt='icon linkedin' width={25} height={25} />
          </Link>
        </div>
      </div>
      {isOpen ? <div className="h-full md:hidden grid grid-cols-12 justify-between items-center py-5 gap-4">
        <Link href="/" className="col-span-12 md:col-span-3 md:pl-5 m-auto w-1/2 md:w-full">
          <Image src={benkyLogo} alt='benky logo' />
        </Link>
        <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-8 items-center text-center h-full md:h-auto">
          <Link onClick={() => setIsOpen(!isOpen)} href="/#about" className="col-span-12 md:col-span-2 text-white text-sm">Inicio</Link>
          <Link onClick={() => setIsOpen(!isOpen)} href="/#services" className="col-span-12 md:col-span-2 text-white text-sm text-nowrap">Quienes somos </Link>
          <Link onClick={() => setIsOpen(!isOpen)} href="/#contact" className="col-span-12 md:col-span-2 text-white text-sm text-nowrap">Nuestros clientes</Link>
          <Link onClick={() => setIsOpen(!isOpen)} href="/#contact" className="col-span-12 md:col-span-2 text-white text-sm">Hablemos</Link>
        </div>
        <div className="col-span-12 md:col-span-2 flex justify-center">
          <Link className="mr-2" href="https://www.facebook.com/Benky-Env%C3%ADos-de-dinero-100305172113627" target="_blank" rel="noopener noreferrer" >
            <Image src={iconFacebook} alt='icon facebook' width={25} height={25} />
          </Link>
          <Link className="mr-2" href='https://www.instagram.com/benky__/' target='_blank' rel='noopener noreferrer'>
            <Image src={iconUser} alt='icon instagram' width={25} height={25} />
          </Link>
          <Link href='https://www.linkedin.com/company/somosbenky/about/' target='_blank' rel='noopener noreferrer' >
            <Image src={iconInstagram} alt='icon linkedin' width={25} height={25} />
          </Link>
        </div>
      </div> :
        <div className=" md:hidden  justify-between items-center py-5 gap-4">
          <Link href="/" className="pl-12 md:w-full flex">
            <Image src={benkyLogo} alt='benky logo' width={100} height={60} />
          </Link>
        </div>}
      <div className="md:hidden flex justify-end absolute" style={{ right: 10, top: 10 }}>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <Image src={close} alt='benky logo' height={35} width={35} /> : <Image src={menu} alt='benky logo' height={35} width={35} />}
        </button>
      </div>
    </nav>
  );
}
