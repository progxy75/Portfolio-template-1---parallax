import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/lologo.png";
import navIcon1 from "../assets/img/indie-hackers-svgrepo-com.svg";
import navIcon2 from "../assets/img/github-icon.svg";
import navIcon3 from "../assets/img/pinterest-color-icon.svg";
import navIcon4 from "../assets/img/product-hunt-logo-icon.svg";
import navIcon5 from "../assets/img/mail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.indiehackers.com/progxy75" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/progxy75" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://in.pinterest.com/progxy75/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.producthunt.com/@prosun_gupta" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Icon" /></a>
              <a href="mailto:prosungupta75@gmail.com"><img src={navIcon5} alt="Icon" /></a>
            </div>
            <p>Handcrafted by me &copy; 2022
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
