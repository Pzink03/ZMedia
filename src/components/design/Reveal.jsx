import { useEffect, useRef } from "react"
import {motion, useInView, useAnimation} from "framer-motion"



export const Reveal = ({ children, width}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("end")

        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", width, overflow:"hidden"}}>
            <motion.div
            variants={{
                start: {opacity: 0, y: 75},
                end: {opacity: 1, y: 0},
            }}
            initial="start"
            animate={mainControls}
            transition={{duration: 0.75, delay: 0.25}}
            >{children}</motion.div>
        </div>
    )
}
