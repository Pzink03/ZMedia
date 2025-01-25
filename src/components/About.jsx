import { benefits } from "../constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from './design/Benefits'
import ClipPath from "../assets/svg/ClipPath"
import { gradient } from "../assets";

export function About (){
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Work harder on your videos, less on your editing." />
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className=''>

                    <p className='text-4xl font-bold inline border-b-4 m border-gray-500 text-blue-500'>About</p>
                    <p className=' md:text-xl sm:tx-md mt-20'>Hello! I'm excited to combine my passion for problem-solving and creativity by developing efficient and user-friendly web applications. I'm an adaptable, and collaborative software engineer who loves the challenges of learning new development tools, editors, and programming languages to create unique and pleasurable user experiences. My passion for software engineering stems from the ability to problem solve and figure out an effective solution in a collaborative way.
                    <br/>
                    <br/>
                    Programming Languages | TypeScript, JavaScript ES6+, Python 3, SQL, HTML5, CSS
                    <br/>
                    Front-End | DOM manipulation, React, React Hooks, Redux Toolkit, Tailwind, WebSockets
                    <br/>
                    Back-End | Django 4, PostgreSQL, Appwrite, MongoDB, FastAPI, RabbitMQ
                    <br/>
                    System Design | Microservices, Domain-driven design, Message passing, Event sourcing
                    <br/>
                    Developer Tools | Git, Docker, Insomnia
                    <br/>
                    <br/>

                    I look forward to hearing from you!
                    </p>

                    </div>

                    <div className="absolute z-30 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] opacity-10">
                        <img
                        src={gradient}
                        className="w-full"
                        width={1440}
                        height={1800}
                        alt="hero"
                        />
                    </div>
                </div>

            </div>
        </Section>
    )
}
