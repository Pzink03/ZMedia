import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Gradient } from "./design/Hero";
import {
    VideoBar,
    VideoChatMessage,
  } from "./design/Services";

export function Services(){
    return (
        <Section>
            <div className="container">
                <Heading title="Video Editing for all creators" text="Unlocks the potential for your videos"/>
                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img
                            className="w-full h-full object-cover md:object-right"
                            width={800}
                            height={730}
                            src={service1}
                            alt="Smartest AI"
                            />
                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                Unlcosk the power of video editing.
                            </p>
                            <ul className="body-2">
                                {brainwaveServices.map((service, index) => (
                                    <li key={index} className="flex items-start py-4 border-t border-n-6">
                                        <img
                                        width={24}
                                        height={24}
                                        src={check}
                                        />
                                        <p className="ml-4">
                                        {service}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                    className="h-full w-full object-cover"
                                    src={service2}
                                    width={630}
                                    height={750}
                                    alt="robot"
                                    />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                    <h4 className="h4 mb-4">
                                        Title Placeholder
                                    </h4>
                                    <p className="body-2 mb-[3rem] text-n-3">
                                        Unlock the power of advanced video editing
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                                <div className="py-12 px-4 xl:px-8">
                                    <h4>
                                        Video Generation
                                    </h4>
                                    <p className="body-2 mb-[2rem]">
                                        Using powerful video editing and AI to deliver the best video results.
                                    </p>
                                    <ul className="flex items-center justify-between">
                                        {brainwaveServicesIcons.map((icon, index) => (
                                            <li key={index} className={`flex rounded-2xl items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}>
                                                <div className={index === 2 ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]" : ""}>
                                                    <img
                                                    src={icon}
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                    <img
                                    src={service3}
                                    className="w-full h-full object-cover"
                                    alt="scary robot"
                                    />
                                    <VideoChatMessage />
                                    <VideoBar />
                                </div>
                            </div>
                        </div>
                        <Gradient />
                    </div>
            </div>
        </Section>
    )
}
