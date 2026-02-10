'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiUser, HiCode, HiLightBulb, HiUserGroup } from 'react-icons/hi'

interface ProfileSummaryProps {
  data: {
    title: string
    content: string
  }
}

export default function ProfileSummary({ data }: ProfileSummaryProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const qualities = [
    { icon: HiCode, title: 'Technical Excellence', description: 'Expert in modern web technologies' },
    { icon: HiLightBulb, title: 'Creative Problem Solving', description: 'Innovative solutions to complex challenges' },
    { icon: HiUserGroup, title: 'Team Leadership', description: 'Mentoring and collaborative development' },
    { icon: HiUser, title: 'User-Centric', description: 'Focus on exceptional user experiences' },
  ]

  return (
    <section id="profile" className="min-h-screen flex items-center py-20 px-4 lg:px-8 bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
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
            <span className="text-gradient">{data.title}</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-glow mb-12"
        >
          <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
            {data.content}
          </p>
        </motion.div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((quality, index) => {
            const Icon = quality.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect-dark rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  className="inline-block bg-gradient-primary p-4 rounded-full mb-4 group-hover:shadow-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-4xl text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-white">{quality.title}</h3>
                <p className="text-primary-200 text-sm">{quality.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
