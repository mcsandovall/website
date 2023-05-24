import { Navbar, Container, Nav } from "react-bootstrap"

function NavBar() {
    return (
    <Navbar
    sticky="top"
    expand="lg"
    variant="light"
    bg="light"
    >
        <Container>
            <Navbar.Brand href="#">Mario Sandoval</Navbar.Brand>
            <Nav className="justify-content-md-center">
                <Nav.Link href="#">About Me</Nav.Link>
                <Nav.Link href="#">Skills</Nav.Link>
                <Nav.Link href="#">Experience</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default NavBar;