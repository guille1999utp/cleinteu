import React from "react";
import Image from "next/image";

import circlepeople from "@/src/assets/logos/circle-people.png";
import googleplay from "@/src/assets/logos/google-play.png";
import Link from "next/link";



export const AboutUs = () => {
    return (
        <section className="grid grid-cols-12 mt-16 md:mt-40 md:gap-10">
            <div className="col-span-12 md:col-span-7 flex flex-col bg-gradient-to-b text-center p-10 lg:p-32 gap-10" style={{ background: "linear-gradient(to bottom, #F99717, #DD3500)"}}>
                <h4 className="text-3xl md:text-5xl font-semibold my-auto border-b-8 border-blue-900" style={{ color: "#133882" }}>WHO IS BENKY</h4>
                <p className="text-lg font-medium">We understood the importance of staying connected to family in our home countries, even when miles apart. Our core values center around safety, speed, and fairness, guaranteeing that clients can trust our platform and enjoy transparent and affordable pricing.</p>
                <p className="text-lg font-medium">Through our user-friendly app and robust technical infrastructure, we bridged the gap between expat communities in the US and their loved ones back home.</p>
            </div>
            <div className="mt-12 md:mt-0 col-span-12 md:col-span-5 flex flex-col justify-center items-center bg-white gap-6">
                <span className="flex justify-center items-center border-8 border-blue-900 rounded-full h-60 w-60 md:h-80 md:w-80">
                    <Image src={circlepeople} alt="circle people" className="w-2/4" />
                </span>
                <Link href="#" className="flex justify-center">
                    <Image src={googleplay} alt="google play" />
                </Link>
            </div>
        </section>
    );
};
