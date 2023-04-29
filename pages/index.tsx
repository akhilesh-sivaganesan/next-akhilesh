import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Internships from "@/components/Internships";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import { Container } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  /*
  const [mounted, setMounted ] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
*/
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex flex-col items-center">
      <Container maxWidth="lg">

      </Container>

    </div>
  }

  const { systemTheme, theme, setTheme } = useTheme();


  return (
    <div className="flex flex-col items-center">
      <Header />
      <Container maxWidth="lg">
        <Hero />
        <Skill />
        <Internships />
        <Projects />
      </Container>
      <Footer />

    </div>

  )
}