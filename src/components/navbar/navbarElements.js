import styled from "styled-components"
import { Link } from "gatsby"
// import { Link as LinkScroll } from 'gatsby'

export const Nav = styled.nav`
  background-color: #000;
  height: 5rem;
  /* margin-top: -5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 60rem) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 69rem;
`

export const NavLogo = styled(Link)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`
