import ButtonGradient from "./assets/svg/ButtonGradient"
import { Benefits } from "./components/Benefits"
import { Button } from "./components/Button"
import { Collaboration } from "./components/Collaboration"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <div className="pt-6 lg:pt-8 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
