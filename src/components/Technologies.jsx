import { RiReactjsLine } from "@remixicon/react"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress, SiFramer, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMongoose, SiReact, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className=" text-4xl md:text-6xl font-medium
         tracking-tight mb-10"> Technologies</motion.h2>


        <motion.div
         whileInView={{ opacity:1, x:0}}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 1.5 }}
         className="flex flex-wrap item-center justify=center gap-4">
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
             className="p-4">
            <SiReact className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
             className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <FaNodeJs className="text-7xl text-green-400"  />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiMongodb className="text-7xl text-cyan-400"  />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiMongoose className="text-7xl text-green-400"  />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiExpress className="text-7xl text-white-400"  />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiJavascript className="text-7xl text-yellow-400"  />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiHtml5 className="text-7xl text-orange-400"  />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiFramer className="text-7xl text-orange-400"  />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiTailwindcss className="text-7xl text-blue-400"  />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            whileHover={{
                scale: 1.1,
                
            }}
            className="p-4">
                <SiGithub className="text-7xl text-black-400"  />
            </motion.div>
            
        </motion.div>
      
    </div>
  )
}

export default Technologies