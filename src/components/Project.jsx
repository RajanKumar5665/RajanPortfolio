import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}  // Increased duration
        className='my-20 text-center text-4xl'>
        Project
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.4 }}  // Increased duration and delay
            className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}  // Increased duration
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}  // Increased duration
                className="mb-2 font-semibold text-2xl">
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}  // Increased duration
                className="mb-4 text-stone-400">
                {project.description}
              </motion.p>
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}  // Increased duration and delay
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Project;
