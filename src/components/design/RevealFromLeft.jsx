import { useEffect, useRef } from "react"
import {motion, useInView, useAnimation} from "framer-motion"



export const RevealFromLeft = ({ children, width}) => {
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
                start: {opacity: 0, x: -100},
                end: {opacity: 1, x: 0},
            }}
            initial="start"
            animate={mainControls}
            transition={{duration: .75, delay: 0.25}}
            >{children}</motion.div>
        </div>
    )
}
