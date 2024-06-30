import Image from "next/image";
import React from "react";

import Group1 from "@/src/assets/logos/Group1.png";
import benkylatinopopulation1 from "@/src/assets/logos/benky_latino_population1.png";
import stunks from "@/src/assets/logos/stunks.png";
import nimbusmarketing from "@/src/assets/logos/nimbus_marketing.png";
import vectorleft from "@/src/assets/logos/Vector1.png";
import vectorrigth from "@/src/assets/logos/Vector2.png";
import EZZEDesign from "@/src/assets/logos/EZZE-Design-Image.png";


export const Coverage = () => {
    return (
        <section className="py-12 flex flex-col mt-24 md:mt-60 justify-center items-center relative px-12 md:px-0">
            <Image src={EZZEDesign} layout="fill" objectFit="cover" alt="Background Image" className="-z-10"/>

            <div className="absolute left-0 top-0 transform h-full hidden md:block">
                <Image src={vectorleft} alt="group icon" className="h-full"/>
            </div>
            <div className="absolute right-0 top-0 transform h-full hidden md:block">
                <Image src={vectorrigth} alt="group icon" className="h-full"/>
            </div>

            <h4 className="inline text-2xl md:text-4xl font-semibold my-auto border-b-8 border-blue-900 text-center mb-10 bg-transparent" style={{ color: "#133882" }}>INSIGHTS ABOUT LATINO POPULATION</h4>
            <div className="grid grid-cols-12 bg-transparent mb-2 md:gap-10">
                <div className="mb-12 md:mb-0 col-span-12 lg:col-span-4 flex flex-col items-center text-center gap-5" style={{ color: "#001B50" }}>
                    <Image src={Group1} alt="group icon" />
                    <h4 className="text-xl lg:text-xl font-extrabold">Latino Demographic And Economic Importance In The US:</h4>
                    <p className="text-base lg:text-lg font-bold">The Latino population in the US accounts for 1 out of every 5 residents. Their growing participation in the labor force has exceeded that of other groups, reflecting their rising economic impact and influence within the country.</p>
                </div>
                <div className="col-span-12 lg:col-span-4 flex justify-center" >
                    <Image src={benkylatinopopulation1} alt="group icon" />
                </div>
                <div className="mt-12 md:mt-0 col-span-12 lg:col-span-4 flex flex-col items-center text-center gap-5" style={{ color: "#001B50" }}>
                    <Image src={stunks} alt="group icon" />
                    <h4 className="text-xl lg:text-2xl font-extrabold w-3/4">Improvements in Economic Well-being:</h4>
                    <p className="text-base lg:text-lg font-bold">Latinos have seen significant improvements in economic well-being, with a marked decrease in poverty rates since 2000. This decline showcases the resilience and upward mobility within the Latino community, which contributes to overall economic growth and stability.</p>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-96 items-center text-center gap-5" style={{ color: "#001B50" }}>
                <Image src={nimbusmarketing} alt="group icon" />
                <h4 className="text-xl lg:text-2xl font-extrabold w-3/4">Impact of Labor Market Strength on Remittances:</h4>
                <p className="text-base lg:text-lg font-bold">A strong US labor market has led to an increase in remittances to Latin American countries, including Colombia, Mexico, El Salvador, and Guatemala. This highlights the close link between economic prosperity in the US and financial support provided to families abroad.</p>
            </div>
        </section>
    );
};
