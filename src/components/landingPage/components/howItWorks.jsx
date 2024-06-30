import Image from "next/image";
import React from "react";
import logoisotipobenky from "@/src/assets/logos/logo-isotipo-benky.png";
import paymoney from "@/src/assets/logos/game-icons_pay-money.png";
import carbonresultold from "@/src/assets/logos/carbon_result-old.png";
import streamlineinsurancehand from "@/src/assets/logos/streamline_insurance-hand.png";
import fluentformnew from "@/src/assets/logos/fluent_form-new-24-filled.png";
import tablerpigmoney from "@/src/assets/logos/tabler_pig-money.png";
import addhomework from "@/src/assets/logos/material-symbols_add-home-work-outline.png";
import decentworkandeconomic from "@/src/assets/logos/streamline_decent-work-and-economic-growth.png";
import hatgraduationadd from "@/src/assets/logos/fluent_hat-graduation-add-16-filled.png";



export const HowItWorks = () => {
  return (
    <article className="mt-16 md:mt-40 px-10 text-white">
      <section className="flex justify-center gap-4 mb-10">
        <h4 className="text-2xl md:text-5xl font-semibold my-auto border-b-8 border-blue-900" style={{color: "#133882"}}>ECOSYSTEM 360</h4>
        <Image src={logoisotipobenky} alt="logo benky" className="w-20 md:w-32"/>
      </section>


      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #133882, #001B50)", width: "100%", height: "100%" }}>
          <Image src={paymoney} width={100} height={100} alt="logo benky" />
          <p>Cross-border payments</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #F99717, #DD3500)", width: "100%", height: "100%" }}>
          <Image src={carbonresultold} width={100} height={100} alt="logo benky" />
          <p>Pension payments for migrants</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #133882, #001B50)", width: "100%", height: "100%"}}>
          <Image src={streamlineinsurancehand} width={100} height={100} alt="logo benky" />
          <p>Repatriation insurance</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #F99717, #DD3500)", width: "100%", height: "100%"}}>
          <Image src={fluentformnew} width={100} height={100} alt="logo benky" />
          <p>Utilities Streaming Services Social Security</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #F99717, #DD3500)", width: "100%", height: "100%"}}>
          <Image src={tablerpigmoney} width={100} height={100} alt="logo benky" />
          <p>Crowdfunding</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #133882, #001B50)", width: "100%", height: "100%"}}>
          <Image src={addhomework} width={100} height={100} alt="logo benky" />
          <p>Purpose of the money (responsible spending)</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #F99717, #DD3500)", width: "100%", height: "100%"}}>
          <Image src={decentworkandeconomic} width={100} height={100} alt="logo benky" />
          <p>Payment of education debt or payment to a family member</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center text-center border bg-gradient-to-b rounded-xl py-8 gap-4 px-2" style={{ background: "linear-gradient(to bottom, #133882, #001B50)", width: "100%", height: "100%"}}>
          <Image src={hatgraduationadd} width={100} height={100} alt="logo benky" />
          <p>Remittances</p>
        </div>
      </section>

    </article>);
};
