'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiSparkles, HiHeart, HiLightningBolt, HiStar } from 'react-icons/hi'

interface AboutProps {
  data: {
    title: string
    description: string
    quote: string
    highlights: string[]
  }
  personal: {
    name: string
    title: string
    yearsOfExperience: number
  }
}

export default function About({ data, personal }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const highlightIcons = [HiSparkles, HiHeart, HiLightningBolt, HiStar]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto max-w-6xl"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-4">
            <span className="text-gradient">{data.title}</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image Placeholder */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="glass-effect rounded-3xl p-8 shadow-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gradient-accent rounded-2xl flex items-center justify-center overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <div className="text-center z-10">
                  <h3 className="text-6xl font-bold font-display mb-2">{personal.name}</h3>
                  <p className="text-2xl text-primary-100">{personal.title}</p>
                  <motion.p
                    className="text-7xl font-bold mt-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {personal.yearsOfExperience}
                  </motion.p>
                  <p className="text-xl text-primary-100">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Description */}
          <div className="space-y-8">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-50 leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.blockquote
              variants={itemVariants}
              className="glass-effect-dark rounded-2xl p-6 border-l-4 border-accent-400 shadow-glow-accent"
            >
              <p className="text-xl md:text-2xl font-display italic text-accent-200">
                "{data.quote}"
              </p>
            </motion.blockquote>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              {data.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index % highlightIcons.length]
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 glass-effect rounded-xl p-4 hover:shadow-glow transition-all duration-300"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon className="text-3xl text-accent-400 flex-shrink-0 mt-1" />
                    <p className="text-primary-50">{highlight}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
