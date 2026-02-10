import type { Metadata } from 'next';
import './globals.css'

// export const metadata: Metadata = {
//   title: 'Sugandha Kumari - Full Stack Developer',
//   description: 'Portfolio of Sugandha Kumari - Full Stack Developer with 13 years of experience specializing in React, Next.js, Python FastAPI, and cloud technologies.',
//   keywords: ['Full Stack Developer', 'React', 'Next.js', 'Python', 'FastAPI', 'Azure', 'Docker'],
//   authors: [{ name: 'Sugandha Kumari' }],
//   openGraph: {
//     title: 'Sugandha Kumari - Full Stack Developer',
//     description: 'Portfolio showcasing 13 years of full-stack development expertise',
//     type: 'website',
//   },
// }
export const metadata: Metadata = {
  title: "Ankit Raj - Full Stack Developer (MERN)",
  description:
    "Portfolio of Ankit Raj, a Full Stack Developer specializing in MERN stack (React, Node.js, Express, MongoDB). Experience building responsive web applications, dashboards, authentication systems, and REST APIs.",
  keywords: [
    "Ankit Raj",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Ankit Raj" }],
  openGraph: {
    title: "Ankit Raj - Full Stack Developer (MERN)",
    description:
      "Portfolio showcasing real-world MERN stack projects, internships, dashboards, and full-stack web applications built by Ankit Raj.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
