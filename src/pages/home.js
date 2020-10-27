import React, { useState } from "react"
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
    </>
  )
}

export default Home
