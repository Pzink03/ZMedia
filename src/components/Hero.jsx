import { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import { Button } from "./Button";
import { Section } from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons, socials } from "../constants";
import { Generating } from "./Generating";
import { Notification } from "./Notification";
import { CompanyLogos } from "./CompanyLogos";



export function Hero(){
    const parallaxRef = useRef(null)

    return (
        <Section
        className="py-[24rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5  ">
                        <div className="relative rounded-xl border-conic p-6 ">
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
                                    <h1 className="h1 mb-6">
                                        Explore the Possibilities of Professionally Edited Videos with {" "}
                                        <span className="inline-block relative">
                                            ZMedia{" "}
                                            <img
                                            src={curve}
                                            className="absolute top-full left-0 w-full xl:-mt-2"
                                            width={624}
                                            height={28}
                                            alt="Curve"
                                            />
                                        </span>
                                    </h1>
                                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                                        Increasing viewer retention and allowing you to focus on creating more content
                                    </p>
                                    <Button href="/pricing" white>
                                        Get Started
                                    </Button>
                                </div>
                                {/* <img
                                src={robot}
                                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                width={1024}
                                height={490}
                                alt="AI"
                                /> */}
                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>
                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[8.5rem] bottom-[7.5rem] px-2 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                    {socials.map((icon, index) => (
                                        <a className="flex items-center justify-center w-14 h-12 rounded-full transition-colors hover:bg-n-6" target="_blank" key={icon.id} href={icon.iconUrl}>
                                            <img
                                            src={icon.iconUrl}
                                            width={40}
                                            height={40}
                                            alt={icon}
                                            />
                                        </a>
                                    ))}
                                    </ul>
                                </ScrollParallax>
                                {/* <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Other Stuff"/>
                                </ScrollParallax> */}
                            </div>
                        </div>
                        <Gradient />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                        src={heroBackground}
                        className="w-full"
                        width={1440}
                        height={1800}
                        alt="hero"
                        />
                    </div>
                    <BackgroundCircles />
                </div>
                <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
            </div>
            <BottomLine />
        </Section>
    )
}
