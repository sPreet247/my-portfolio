import React from "react"
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link to="/">dolla</Link>
          </NavLogo>
          {/* <MobileIcon>
            <FaBars />
          </MobileIcon> */}
          {/* <NavMenu>
            <NavItem>
              <NavLinks>
                <Link to="about">About</Link>
              </NavLinks>
            </NavItem>
          </NavMenu> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
