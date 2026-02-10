'use client'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

interface ContactProps {
  data: {
    title: string
    subtitle: string
    callToAction: string
  }
  personal: {
    email: string
    phone: string
    location: string
    github: string
    linkedin: string
  }
}

export default function Contact({ data, personal }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission (would typically send to an API)
  //   console.log('Form submitted:', formData)
  //   alert('Thank you for your message! I\'ll get back to you soon.')
  //   setFormData({ name: '', email: '', message: '' })
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
  
      alert("Message sent successfully! 🚀")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Failed to send message 😢 Please try again.")
    }
  }
  
  const contactInfo = [
    { icon: HiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: HiPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: HiLocationMarker, label: 'Location', value: personal.location, href: '#' },
  ]

  const socialLinks = [
    { icon: SiGithub, label: 'GitHub', href: personal.github, color: 'hover:text-white' },
    { icon: SiLinkedin, label: 'LinkedIn', href: personal.linkedin, color: 'hover:text-blue-400' },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 lg:px-8 bg-gradient-to-b from-transparent via-primary-900/20 to-primary-900/40">
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
            className="h-1 w-32 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-2">
            {data.subtitle}
          </p>
          <p className="text-accent-300 font-semibold text-lg">
            {data.callToAction}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-3xl p-8 shadow-glow">
              <h3 className="text-3xl font-bold mb-6 font-display text-white">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="bg-gradient-accent p-4 rounded-full shadow-glow-accent group-hover:scale-110 transition-transform">
                        <Icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-primary-300 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-primary-700">
                <p className="text-primary-300 mb-4">Follow me on:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className={`bg-primary-800/50 p-4 rounded-full transition-all duration-300 ${social.color}`}
                      >
                        <Icon className="text-3xl" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 shadow-glow space-y-6">
              <h3 className="text-3xl font-bold mb-6 font-display text-white">Send a Message</h3>
              
              <div>
                <label htmlFor="name" className="block text-primary-200 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-200 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-200 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/50 transition-all resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-accent text-white py-4 rounded-lg font-bold text-lg shadow-glow-accent hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-primary-700"
        >
          <p className="text-primary-300 flex items-center justify-center gap-2">
            Made with <HiHeart className="text-accent-400 animate-pulse" /> by Ankit Raj
          </p>
          <p className="text-primary-400 text-sm mt-2">
            © 2026 All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}