import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import { Button } from "./Button";
import { Section } from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration"
import { Reveal } from "./design/Reveal";

export function Collaboration(){
    return (
        <Reveal>
            <Section crosses id="WhatIOffer">
                <div className="container lg:flex mt-10" >
                    <div className="max-w-[28rem]">
                        <h2 className="h2 mb-4 md:mb-6">
                            More Than Just Video Editing
                        </h2>
                        <ul className="max-w-[22rem] mb-10 md:mb-14">
                            {collabContent.map((content) => (
                                <li className="mb-2 py-2" key={content.id}>
                                    <div className="flex items-center">
                                        <img
                                        src={check}
                                        width={24}
                                        height={24}
                                        alt="check"
                                        />
                                        <h6 className="body-2 ml-5">
                                            {content.title}
                                        </h6>
                                    </div>
                                        {content.text && (
                                            <p className="body-2 mt-1 text-n-4">{content.text}</p>
                                        )}
                                </li>
                            ))}
                        </ul>
                        <Button>Contact Me</Button>
                    </div>
                    <div className="lg:ml-auto xl:w-[30rem] mt-4">
                        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-48 lg:w-[22rem] lg:mx-auto">
                            {collabText}
                        </p>
                        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                        <img
                                        src={brainwaveSymbol}
                                        width={48}
                                        height={48}
                                        alt="brainwave"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {collabApps.map((app, index) => (
                                    <li key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                                    >
                                        <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                            <img
                                            className="m-auto"
                                            src={app.icon}
                                            width={app.width}
                                            height={app.height}
                                            alt="App"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <LeftCurve />
                            <RightCurve />

                        </div>

                    </div>
                </div>
            </Section>
        </Reveal>
    )
}
