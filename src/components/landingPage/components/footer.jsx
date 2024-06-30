import Image from "next/image";
import Link from "next/link";
import React from "react";
import benkylogowhite from '@/src/assets/logos/Benky_logo_white 1.png';
import arrowtop from '@/src/assets/logos/arrowtop.png';
import mail from '@/src/assets/logos/mail.png';
import phone from '@/src/assets/logos/phone.png';


export const Footer = () => {
    
    return (
        <div className="flex flex-col relative justify-around bg-gradient-to-b text-white z-10"
            style={{ background: "linear-gradient(to bottom, #F99717, #DD3500)", width: "100%", height: "100%" }}>

            <section className="flex justify-center pt-10 pb-14">
                <Link href="#">
                    <Image src={arrowtop} alt='arrow top icon' width={45} height={45} />
                </Link>
            </section>

            <section className="grid grid-cols-12 md:gap-10">
                <ul className="col-span-12 md:col-span-4 flex flex-col gap-2 justify-center text-center">
                    <h4>Navigation:</h4>
                    <li>
                        <Link href="">Home</Link>
                    </li>
                    <li>
                        <Link href="">About Us</Link>
                    </li>
                    <li>
                        <Link href="">How it Works</Link>
                    </li>
                    <li>
                        <Link href="">Coverage</Link>
                    </li>
                    <li>
                        <Link href="">Services</Link>
                    </li>
                </ul>
                <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center mt-12 mb-12 md:mt-0 md:mb-0">

                    <Image src={benkylogowhite} width={300} height={300} alt="logo Benky" />

                </div>
                <div className="col-span-12 md:col-span-4 m-auto">

                    <div className="flex flex-col text-center md:text-start">
                        <Link className="mb-1 md:mb-0"  href="#">
                            Privacy
                        </Link>
                        <Link className="mb-1 md:mb-0" href="#">
                            Terms and conditions
                        </Link>
                        <Link href="#">
                            FAQ&#39S
                        </Link>
                    </div>

                </div>
            </section>

            <section>
                <ul className="flex flex-col md:flex-row mt-10 justify-center items-center gap-10 pb-14">
                    <li className="flex">
                        <Image src={mail} alt='mail icon' width={25} height={25} />
                        <a href="">info@benky.io</a>
                    </li>
                    <li className="flex">
                        <Image src={phone} alt='phone icon' width={25} height={25} />
                        <a href="">+1 (333) 1234 5678</a>
                    </li>
                </ul>
            </section>
        </div>
    );
};
