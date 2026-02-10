'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar } from 'react-icons/hi'

interface ObjectiveProps {
  data: {
    title: string
    content: string
  }
}

export default function Objective({ data }: ObjectiveProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="objective" className="min-h-screen flex items-center py-20 px-4 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-5xl"
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
            className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12 shadow-glow relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ rotate: 0 }}
              animate={inView ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
            >
              <div className="bg-gradient-accent p-6 rounded-full shadow-glow-accent">
                <HiStar className="text-5xl text-white" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-primary-50 leading-relaxed text-center relative z-10"
            >
              {data.content}
            </motion.p>

            {/* Decorative Quote Marks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-4 left-4 text-9xl font-display text-accent-400 leading-none"
            >
              "
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-4 right-4 text-9xl font-display text-primary-400 leading-none"
            >
              "
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
