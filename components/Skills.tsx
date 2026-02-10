// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { SiReact, SiNextdotjs, SiPython, SiDocker, SiMicrosoftazure, SiGit, SiGithubactions, SiTypescript, SiTailwindcss, SiRedux, SiFastapi, SiNodedotjs, SiPostgresql, SiMongodb, SiKubernetes, SiTerraform, SiAmazonaws } from 'react-icons/si'

// interface SkillsProps {
//   data: Array<{
//     category: string
//     items: string[]
//   }>
// }

// export default function Skills({ data }: SkillsProps) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const getSkillIcon = (skill: string) => {
//     const iconMap: { [key: string]: any } = {
//       'React': SiReact,
//       'Next.js': SiNextdotjs,
//       'TypeScript': SiTypescript,
//       'Tailwind CSS': SiTailwindcss,
//       'Redux': SiRedux,
//       'Python': SiPython,
//       'FastAPI': SiFastapi,
//       'Node.js': SiNodedotjs,
//       'PostgreSQL': SiPostgresql,
//       'MongoDB': SiMongodb,
//       'Docker': SiDocker,
//       'Azure': SiMicrosoftazure,
//       'AWS': SiAmazonaws,
//       'Kubernetes': SiKubernetes,
//       'Terraform': SiTerraform,
//       'Git': SiGit,
//       'GitHub Actions': SiGithubactions,
//     }
//     return iconMap[skill] || SiReact
//   }

//   return (
//     <section id="skills" className="min-h-screen flex items-center py-20 px-4 lg:px-8">
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8 }}
//         className="container mx-auto max-w-6xl"
//       >
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-7xl font-bold font-display mb-4">
//             <span className="text-gradient">Technical Arsenal</span>
//           </h2>
//           <motion.div
//             className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"
//             initial={{ width: 0 }}
//             animate={inView ? { width: 128 } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {data.map((skillCategory, categoryIndex) => (
//             <motion.div
//               key={categoryIndex}
//               initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
//               animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
//               transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
//               className="glass-effect rounded-3xl p-8 shadow-glow hover:shadow-glow-accent transition-all duration-300"
//             >
//               {/* Category Title */}
//               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white font-display">
//                 {skillCategory.category}
//               </h3>

//               {/* Skills */}
//               <div className="space-y-4">
//                 {skillCategory.items.map((skill, skillIndex) => {
//                   const Icon = getSkillIcon(skill)
//                   return (
//                     <motion.div
//                       key={skillIndex}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                       transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
//                       className="group"
//                     >
//                       <div className="flex items-center gap-3 mb-2">
//                         <Icon className="text-2xl text-accent-400 group-hover:text-accent-300 transition-colors" />
//                         <span className="text-primary-50 font-medium">{skill}</span>
//                       </div>
//                       <div className="relative h-2 bg-primary-900/50 rounded-full overflow-hidden">
//                         <motion.div
//                           className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-400 via-accent-400 to-accent-500 rounded-full"
//                           initial={{ width: 0 }}
//                           animate={inView ? { width: `${85 + Math.random() * 15}%` } : { width: 0 }}
//                           transition={{ duration: 1.5, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1, ease: 'easeOut' }}
//                         >
//                           <motion.div
//                             className="absolute inset-0 bg-white/30"
//                             animate={{
//                               x: ['-100%', '100%'],
//                             }}
//                             transition={{
//                               duration: 2,
//                               repeat: Infinity,
//                               ease: 'linear',
//                             }}
//                           />
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-accent-400/30 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Simple Icons
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiTerraform,
} from 'react-icons/si'

// Font Awesome (stable icons)
import { FaAws, FaMicrosoft } from 'react-icons/fa'

interface SkillsProps {
  data: {
    category: string
    items: string[]
  }[]
}

export default function Skills({ data }: SkillsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getSkillIcon = (skill: string) => {
    const iconMap: Record<string, any> = {
      React: SiReact,
      'Next.js': SiNextdotjs,
      TypeScript: SiTypescript,
      'Tailwind CSS': SiTailwindcss,
      Redux: SiRedux,
      Python: SiPython,
      FastAPI: SiFastapi,
      'Node.js': SiNodedotjs,
      PostgreSQL: SiPostgresql,
      MongoDB: SiMongodb,
      Docker: SiDocker,
      Kubernetes: SiKubernetes,
      Terraform: SiTerraform,
      Git: SiGit,
      'GitHub Actions': SiGithubactions,
      Azure: FaMicrosoft,
      AWS: FaAws,
    }

    return iconMap[skill] || SiReact
  }

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-20 px-4 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-6xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              className="glass-effect rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>

              <div className="space-y-4">
                {category.items.map((skill, j) => {
                  const Icon = getSkillIcon(skill)

                  return (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + j * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="text-2xl text-accent-400" />
                        <span className="font-medium">{skill}</span>
                      </div>

                      <div className="h-2 bg-primary-900/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-400 via-accent-400 to-accent-500"
                          initial={{ width: 0 }}
                          animate={
                            inView
                              ? { width: `${85 + Math.random() * 15}%` }
                              : {}
                          }
                          transition={{ duration: 1.2 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
