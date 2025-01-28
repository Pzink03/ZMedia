import { motion } from "framer-motion";
import { Hand } from "lucide-react";

export default function WaveHandIcon() {
  return (
    <div className="flex justify-center items-center ">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 15, -10, 10, 0] }}
        transition={{
          duration: 10.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Hand size={44} className="text-purple-700" />
      </motion.div>
    </div>
  );
}
