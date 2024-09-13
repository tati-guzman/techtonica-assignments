import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/BlueTechtonicaWord.png'


const FixedNavBar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
                  src={Logo}
                  height="30"
                  className="d-lg-inline-block"
                  alt="The word Techtonica written in block letters in two shades of blue"
                />
          </Navbar.Brand>

          {/* Update to whatever makes sense after forms are updated */}
          <Nav.Link>Search via Category</Nav.Link>
          
          <Navbar.Toggle />
          
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Welcome, <a href="#login">Event Manager</a>!
            </Navbar.Text>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </>
  );
};

export default FixedNavBar;