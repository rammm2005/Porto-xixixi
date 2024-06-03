import React from "react";
import { Image } from "@nextui-org/react";
import { TypewriterEffectSmooth } from "../ui/TypeWritter";

export default function HeroSection() {
    const words = [
        {
            text: "See",
        },
        {
            text: "More",
        },
        {
            text: "About",
        },
        {
            text: "Me",
        },
        {
            text: "Scrolling Down.",
            className: "text-blue-500 dark:text-blue-500"
        }
    ];
    return (

        <div className="flex flex-row justify-between items-center w-full">

            <div className="flex">
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold dark:text-white text-slate-900 leading-13">HI, All I`M</h1>
                    <h1 className="text-5xl font-bold dark:text-white text-slate-900 leading-13">Rama Dita As <span className="text-purpleLight light:text-purpleDark">Software Engginer</span> <span>&</span> <span className="text-blueLight light:text-blueDark">Web Developer</span> 🙌</h1>
                    <TypewriterEffectSmooth words={words} />
                </div>
            </div>
            <div className="flex w1/2">
                <Image
                    width={300}
                    height={200}
                    alt="NextUI hero Image with delay"
                    src="/image/profile.png"
                />
            </div>


        </div>
    );
}
