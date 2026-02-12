// 'use client'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { HiExternalLink, HiCode } from 'react-icons/hi'
// import { SiGithub } from 'react-icons/si'

// interface ProjectsProps {
//   data: Array<{
//     id: number
//     name: string
//     description: string
//     image: string
//     technologies: string[]
//     liveUrl: string
//     githubUrl: string
//     featured: boolean
//   }>
// }

// export default function Projects({ data }: ProjectsProps) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   return (
//     <section id="projects" className="min-h-screen py-20 px-4 lg:px-8">
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8 }}
//         className="container mx-auto max-w-7xl"
//       >
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-7xl font-bold font-display mb-4">
//             <span className="text-gradient">Featured Work</span>
//           </h2>
//           <motion.div
//             className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"
//             initial={{ width: 0 }}
//             animate={inView ? { width: 128 } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />
//           <p className="text-primary-200 mt-6 text-lg">
//             A collection of projects that showcase my passion for creating meaningful solutions
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="glass-effect rounded-3xl overflow-hidden shadow-glow hover:shadow-glow-accent transition-all duration-500 group"
//             >
//               {/* Project Image */}
//               <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600">
//                 <motion.div
//                   className="absolute inset-0 flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <HiCode className="text-8xl text-white/30" />
//                 </motion.div>
                
//                 {/* Overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//                 />

//                 {/* Project Number Badge */}
//                 <div className="absolute top-4 left-4 bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-glow-accent">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>

//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                     className="absolute top-4 right-4 bg-gradient-accent px-3 py-1 rounded-full text-sm font-semibold shadow-glow-accent"
//                   >
//                     Featured
//                   </motion.div>
//                 )}
//               </div>

//               {/* Project Details */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-accent-300 transition-colors">
//                   {project.name}
//                 </h3>
                
//                 <p className="text-primary-200 mb-4 line-clamp-3">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.slice(0, 4).map((tech, techIndex) => (
//                     <motion.span
//                       key={techIndex}
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
//                       transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
//                       className="px-3 py-1 bg-primary-800/50 rounded-full text-xs text-primary-100"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                   {project.technologies.length > 4 && (
//                     <span className="px-3 py-1 bg-primary-800/50 rounded-full text-xs text-primary-100">
//                       +{project.technologies.length - 4}
//                     </span>
//                   )}
//                 </div>

//                 {/* Links */}
//                 <div className="flex gap-4">
//                   {/* <motion.a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 bg-gradient-primary hover:shadow-glow text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <HiExternalLink className="text-xl" />
//                     <span>Live Demo</span>
//                   </motion.a> */}
//                   {project.liveUrl?.trim() && (
//   <motion.a
//     href={project.liveUrl}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex-1 flex items-center justify-center gap-2 bg-gradient-primary hover:shadow-glow text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <HiExternalLink className="text-xl" />
//     <span>Live Demo</span>
//   </motion.a>
// )}

                  
//                   <motion.a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-primary-800/50 hover:bg-primary-700/50 text-white py-2 px-4 rounded-lg transition-all duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <SiGithub className="text-2xl" />
//                   </motion.a>
//                 </div>
//               </div>

//               {/* Animated Border */}
//               <motion.div
//                 className="absolute inset-0 border-2 border-accent-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 initial={{ scale: 0.8 }}
//                 whileHover={{ scale: 1 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

interface ProjectsProps {
  data: Array<{
    id: number
    name: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    featured: boolean
  }>
}

export default function Projects({ data }: ProjectsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="min-h-screen py-20 px-4 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-4">
            <span className="text-gradient">Featured Work</span>
          </h2>

          <motion.div
            className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <p className="text-primary-200 mt-6 text-lg">
            A collection of projects that showcase my passion for creating meaningful solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative glass-effect rounded-3xl overflow-hidden shadow-glow hover:shadow-glow-accent transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 to-accent-600">
                    <HiCode className="text-8xl text-white/30" />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Project Number Badge */}
                <div className="absolute top-4 left-4 bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-glow-accent">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-accent px-3 py-1 rounded-full text-sm font-semibold shadow-glow-accent">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-accent-300 transition-colors">
                  {project.name}
                </h3>

                <p className="text-primary-200 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                      className="px-3 py-1 bg-primary-800/50 rounded-full text-xs text-primary-100"
                    >
                      {tech}
                    </motion.span>
                  ))}

                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-primary-800/50 rounded-full text-xs text-primary-100">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl?.trim() && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-primary hover:shadow-glow text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiExternalLink className="text-xl" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary-800/50 hover:bg-primary-700/50 text-white py-2 px-4 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SiGithub className="text-2xl" />
                  </motion.a>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-accent-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
