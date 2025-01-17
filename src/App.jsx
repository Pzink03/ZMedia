import ButtonGradient from "./assets/svg/ButtonGradient"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

function App() {

  return (
    <>
      <div className="pt-6 lg:pt-8 overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
