import React, { useState } from "react"
import HeroSection from "../components/heroSection/hero"
import InfoSection from "../components/infoSection/info"
import Navbar from "../components/navbar/navbar"
import Sidebar from "../components/sidebar/sidebar"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  )
}

export default Home