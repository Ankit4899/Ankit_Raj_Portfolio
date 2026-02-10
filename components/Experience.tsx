'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCalendar, HiLocationMarker, HiBriefcase } from 'react-icons/hi'

interface ExperienceProps {
  data: Array<{
    id: number
    company: string
    position: string
    duration: string
    startDate: string
    endDate: string
    location: string
    image: string
    roles: string[]
    technologies: string[]
  }>
}

export default function Experience({ data }: ExperienceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="min-h-screen py-20 px-4 lg:px-8 bg-gradient-to-b from-transparent via-accent-900/10 to-transparent">
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
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-4">
            <span className="text-gradient">Career Milestones</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {data.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-400 rounded-full border-4 border-primary-900 shadow-glow-accent z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content Card */}
                <motion.div
                  className="flex-1 glass-effect rounded-3xl overflow-hidden shadow-glow hover:shadow-glow-accent transition-all duration-500 group"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 bg-gradient-accent overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-600/50 to-accent-600/50 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center z-10">
                        <HiBriefcase className="text-6xl text-white mx-auto mb-2" />
                        <h3 className="text-3xl font-bold text-white font-display">{job.company}</h3>
                      </div>
                    </motion.div>
                    
                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Details */}
                  <div className="p-6 md:p-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
                      {job.position}
                    </h4>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-primary-200">
                      <div className="flex items-center gap-2">
                        <HiCalendar className="text-accent-400" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiLocationMarker className="text-accent-400" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Roles & Responsibilities */}
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold text-primary-100 mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {job.roles.map((role, roleIndex) => (
                          <motion.li
                            key={roleIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + roleIndex * 0.1 }}
                            className="text-primary-50 flex items-start gap-2"
                          >
                            <span className="text-accent-400 mt-1">▹</span>
                            <span>{role}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: 1 + index * 0.2 + techIndex * 0.05 }}
                          className="px-3 py-1 bg-gradient-primary rounded-full text-sm text-white hover:shadow-glow transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
