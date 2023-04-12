import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Logo.png';
import linkedin from '../assets/img/linkedin.svg'
import meta from '../assets/img/meta.svg';
import instagram from '../assets/img/instagram-logo.svg';
import twitter from '../assets/img/twitter.svg';
import behance from '../assets/img/behance.svg';
import dribble from '../assets/img/dribble.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/prosun-gupta-983832116/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                <a href="https://www.facebook.com/prosun.gupta" target="_blank" rel="noreferrer"><img src={meta} alt="" /></a>
                <a href="https://www.instagram.com/progxy75/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
                <a href="https://twitter.com/PRASUNG39910101" target="_blank" rel="noreferrer"><img src={twitter} alt="" /></a>
                <a href="https://www.behance.net/prosungupta" target="_blank" rel="noreferrer"><img src={dribble} alt="" /></a>
                <a href="https://dribbble.com/progxy75" target="_blank" rel="noreferrer"><img src={behance} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
