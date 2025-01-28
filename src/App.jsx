import ButtonGradient from "./assets/svg/ButtonGradient"
// import { Benefits } from "./components/Benefits"

import { Collaboration } from "./components/Collaboration"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
// import { Pricing } from "./components/Pricing"
import { Roadmap } from "./components/Roadmap"
import { Services } from "./components/Services"
import { About } from "./components/About"

function App() {

  return (
    <>
      <div className="pt-6 lg:pt-8 overflow-hidden">
        <Header />
        <Hero />
        <About />
        {/* <Benefits /> */}
        <Collaboration />
        <Services />
        {/* <Pricing /> */}
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
