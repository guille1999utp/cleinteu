import React from "react";
import Image from "next/image";
import Link from "next/link";

import mail from "@/src/assets/logos/mail.png";
import benkylogowhite from "@/src/assets/logos/Benky_logo_white 1.png";

import vectororange from "@/src/assets/newLogos/vectororange.png";
import vectorblue from "@/src/assets/newLogos/vectorblue.png";
import completephone from "@/src/assets/newLogos/complete-phone.png";
import circle from "@/src/assets/newLogos/circle.png";
import imagetrading from "@/src/assets/logos/personas.jpeg";
import imagecellphonehand from "@/src/assets/newLogos/imagecellphonehand.png";
import imageaccounts from "@/src/assets/newLogos/imageaccounts.png";
import rectangle from "@/src/assets/newLogos/rectangle.png";
import vectorheart from "@/src/assets/newLogos/vectorheart.png";
import Frame16 from "@/src/assets/newLogos/Frame16.png";
import Frame17 from "@/src/assets/newLogos/Frame17.png";
import Frame18 from "@/src/assets/newLogos/Frame18.png";
import LogoCliente from "@/src/assets/logos/logocliente.png";
import SectionAliados from "@/src/assets/logos/section-aliados.jpg";

export const Banner = () => {
    return (
      <div className="flex flex-col h-full" id="home">
        <div className="flex-grow mt-32">

          <section
            className="grid grid-cols-12 mt-0 md:mt-48 relative"
            id="aboutUs"
          >
            <div className="flex col-span-12 md:col-span-6 justify-center items-center ">
              <div className="relative w-full h-96 inset-0 flex justify-center items-center">
                <Image
                  src={circle}
                  alt="circle"
                  className="min-[0px]:hidden min-[800px]:flex inset-0 w-full 2xl:w-4/5 object-cover"
                />
                <Image
                  src={LogoCliente}
                  alt="telephone"
                  className="absolute inset-0 w-1/3 2xl:w-1/3 m-auto "
                  style={{ background: "rgb(36,186,254)" }}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center h-full">
              <div className="p-10 2xl:p-22 m-10 bg-white rounded-2xl shadow-lg">
                <h4 className="flex flex-col">
                  <span className="text-sm 2xl:text-4xl font-medium text-transparent bg-gradient-to-b from-whiteblue_custom via-whiteblue_custom2 to-whiteblue_custom3 bg-clip-text tracking-widest">
                    Quienes somos
                  </span>
                  <div className="text-3xl 2xl:text-6xl">
                    <span className="font-medium">Que es </span>
                    <span className="font-bold text-transparent bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom bg-clip-text">
                      HouseMedia
                    </span>
                  </div>
                </h4>
                <p className="text-sm 2xl:text-2xl border-l-8 border-blue-500 pl-2 mt-2 text-paragraph">
                  En House Media sabemos que la creatividad publicitaria no
                  consiste solo en lanzar un mensaje para que las campañas
                  tengan éxito, debemos seducir, motivar y llegar al corazón de
                  las personas.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-36">
            <Image
              src={SectionAliados}
              alt="Aliados"
              className="image-section"
              width={"100%"}
              style={{ width: "100% !important" }}
            />
          </section>

          <div className=" flex flex-col justify-center items-center px-8 mt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center mb-6">
              <div className="pb-1">
                <span className="font-extrabold text-blue_custom">En </span>
                <span className="font-extrabold text-transparent bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom bg-clip-text">

                </span>
                <span className="font-semibold text-blue_custom">
                  Así trabajamos en la activación de tu marca 
                </span>
              </div>

            </h1>
            <p className="w-2/3 lg:w-1/2 text-base text-paragraph mb-6 text-center">
            House Media es tu aliado en la organización de tu activación de marca, nos encargamos de todo.
            </p>
            <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-3xl px-10 font-light bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom text-white text-base transition hover:scale-110 mb-20">
              <span className="pr-2">Contact</span>
              <Image src={mail} alt="mail icon" width={20} height={20} />
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </div>

          <section className="grid grid-cols-12 relative gap-6 mx-10 md:mx-20 py-20 z-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center text-center border bg-white rounded-xl p-6">
              <Image
                className="rounded-xl w-full mb-4"
                src={imagetrading}
                alt="logo benky"
              />
              <h4 className="text-lg font-bold mb-2">Acompañamiento:</h4>
              <p className="text-xs">
                Te acompañamos desde el inicio en la creación de tu proyecto, a
                partir de la creatividad y la estrategia, asesorándote y
                orientándote.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center text-center border bg-white rounded-xl p-6">
              <Image
                className="rounded-xl w-full mb-4"
                src={imagecellphonehand}
                alt="logo benky"
              />
              <h4 className="text-lg font-bold mb-2">Creación:</h4>
              <p className="text-xs">
                somos un equipo de creativos apasionados que prosperamos
                desarrollando ideas frescas e innovadoras
              </p>
            </div>

            <div className="col-span-12 md:col-span-12 lg:col-span-4 flex flex-col items-center text-center border bg-white rounded-xl p-6">
              <Image
                className="rounded-xl w-full mb-4"
                src={imageaccounts}
                alt="logo benky"
              />
              <h4 className="text-lg font-bold mb-2">Resultado:</h4>
              <p className="text-xs">
                Nos enorgullece nuestra capacidad de convertir ideas creativas
                en resultados tangibles, y estamos comprometidos a ayudar a
                nuestros clientes a alcanzar sus metas.
              </p>
            </div>
          </section>

        </div>
      </div>
    );
};
