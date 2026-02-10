'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Objective from '@/components/Objective'
import ProfileSummary from '@/components/ProfileSummary'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import portfolioData from '@/data/portfolio.json'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero personal={portfolioData.personal} />
      <About data={portfolioData.about} personal={portfolioData.personal} />
      <Objective data={portfolioData.objective} />
      <ProfileSummary data={portfolioData.profileSummary} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} personal={portfolioData.personal} />
    </main>
  )
}
