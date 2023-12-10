import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import "./NavbarLandingPage.css";
import ButtonCustom from "../../button";
import {Link} from "react-router-dom";
import React from "react";

interface NavbarLandingPageProps {
    children: React.ReactNode
}
const NavbarLandingPage = ({children}: NavbarLandingPageProps) => {
    return (
        <>
            <Navbar key={'lg'} expand={'md'} className="py-3 px-5" style={{backgroundImage: `url(https://i.ibb.co/ZS2srHQ/bg.png)`}}>
                <Container fluid >
                    <Navbar.Brand>
                        <Link to='/'>
                            <img src={'https://i.ibb.co/pWBQ2ng/logo.png'} alt={'logo'}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'lg'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                                <b>BCR</b>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 custom-navbar-text-color" >
                                <Nav.Link href="#OurService">Our Service</Nav.Link>
                                <Nav.Link href="#WhyUs">Why Us</Nav.Link>
                                <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                                <Nav.Link href="#Faq">FAQ</Nav.Link>
                                <ButtonCustom name='Register' />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {children}
        </>
    )
}

export default NavbarLandingPage;
