import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false)
  const [listener, setListener] = useState(null)

  useEffect(() => {
      setListener(
          document.addEventListener("scroll", (e) => {
              let scrolled = document.scrollingElement.scrollTop
              if (scrolled >= 5) {
                setIsScroll(true)
              }else {
                setIsScroll(false)
              }
          })
      ) 
  }, [])

  useEffect(() => {
      document.removeEventListener("scroll", listener)
  },)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color={isScroll ? 'light' : ''} light expand="md" fixed='top'>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='mr-3'>
                <button className={isScroll ? "btn btn-outline-primary" : "btn btn-primary"}>Login</button>
            </NavItem>
            <NavItem>
                <button className={isScroll ? "btn btn-outline-success" : "btn btn-success"}>Sign Up</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;